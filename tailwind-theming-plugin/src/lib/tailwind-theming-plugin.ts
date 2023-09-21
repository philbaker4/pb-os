import * as plugin from 'tailwindcss/plugin';

import { HexCode } from './color-utilities';
import {
  NestedColorDefinition,
  TailwindColorKey,
  getColorCssVariables,
  getColorUtilities,
} from './config-mapper';

// ------------------------------
// Plugin definition
// ------------------------------

type GenericTheme = {
  colors: {
    [key in TailwindColorKey]?: NestedColorDefinition;
  };
};
type GenericThemes = {
  base: GenericTheme;
  dark?: GenericTheme;
} & {
  [key: string]: GenericTheme;
};

const TailwindMultiThemePluginFactory = <ThemesT extends GenericThemes>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _t: ThemesT
) => {
  return plugin.withOptions<ThemesT>(
    function (themes) {
      const { base, dark } = themes;
      return function ({ addBase }) {
        addBase({
          ':root': getColorCssVariables(base.colors),
        });
        if (dark) {
          addBase({
            '@media (prefers-color-scheme: dark)': getColorCssVariables(dark.colors),
          });
        }
        Object.entries(themes).forEach(([key, value]) => {
          addBase({
            [`[data-theme="${key}"]`]: getColorCssVariables(value.colors),
          });
        });
      };
    },
    // Only need to create utilities for the base theme, as css variable definitions will change under the hood
    function (themes) {
      const { base } = themes;
      return {
        theme: {
          extend: {
            ...getColorUtilities(base.colors),
          },
        },
      };
    }
  );
};

// log utilities to statically create demo
function listColorUtilities<
  ColorTheme extends { [key in TailwindColorKey]?: NestedColorDefinition }
>(colorTheme: ColorTheme) {
  const typeVariables = getColorCssVariables(colorTheme);

  console.log(
    Object.keys(typeVariables).map((v) => {
      return v.replace('--', '');
    })
  );
}

export type { HexCode };
export { TailwindMultiThemePluginFactory, listColorUtilities };
