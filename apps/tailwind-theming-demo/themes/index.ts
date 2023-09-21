import { contrastTheme } from './contrast';
import { darkTheme } from './dark';
import { lightTheme } from './light';

const themes = {
  base: lightTheme,
  dark: darkTheme,
  contrast: contrastTheme,
} as const;

// use ThemeKey and THEME_KEYS to configure theme selection in a type safe manner
type ThemeKey = keyof typeof themes;
const THEME_KEYS = Object.keys(themes) as ThemeKey[];

export type { ThemeKey };
export { themes, THEME_KEYS };
