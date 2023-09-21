import type { Config } from 'tailwindcss';
import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/next/tailwind';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TailwindMultiThemePluginFactory } from '../../tailwind-theming-plugin/src';

import { themes } from './themes';

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
