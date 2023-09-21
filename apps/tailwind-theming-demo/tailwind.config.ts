import type { Config } from 'tailwindcss';
import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/next/tailwind';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TailwindMultiThemePluginFactory } from '../../tailwind-theming-plugin/src';
// see note in /libs/theming/src/lib/color/color-utilities.ts
// import { TailwindMultiThemePlugin } from '@zelus-utils/theming';

// import { themes } from './theming';
const themes = {
  base: {
    colors: {

    }
  }
}

const TailwindMultiThemePlugin = TailwindMultiThemePluginFactory(themes);

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html,mdx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    TailwindMultiThemePlugin(themes),
  ],
} satisfies Config;
