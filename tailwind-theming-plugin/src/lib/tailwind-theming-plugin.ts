import * as plugin from 'tailwindcss/plugin';

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
} & {
  [key: string]: GenericTheme;
};

const TailwindMultiThemePluginFactory = <ThemesT extends GenericThemes>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _t: ThemesT
) => {
  return plugin.withOptions<ThemesT>(
    function (themes) {
      const { base } = themes;
      return function ({ addBase }) {
        addBase({
          ':root': getColorCssVariables(base.colors),
        });
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

export { TailwindMultiThemePluginFactory };
