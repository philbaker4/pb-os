import { contrastTheme } from './contrast';
import { darkTheme } from './dark';
import { lightTheme } from './light';

const themes = {
  base: lightTheme,
  dark: darkTheme,
  contrast: contrastTheme,
} as const;
type ThemeKey = keyof typeof themes;
const THEME_KEYS = Object.keys(themes) as ThemeKey[];
export type { ThemeKey };
export { themes, THEME_KEYS };
