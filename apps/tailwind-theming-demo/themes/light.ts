import colors from 'tailwindcss/colors';
import { ColorThemeSchema } from './schema';

const lightColorTheme: ColorThemeSchema = {
  backgroundColor: {
    default: colors.white,
    surface: {
      _: colors.white,
      subdued: colors.gray[50],
      default: {
        _: colors.white,
        subdued: colors.gray[100],
        selected: colors.gray[200],
      },
      highlight: {
        _: colors.purple[200],
        subdued: colors.purple[100],
      },
      primary: {
        _: colors.teal[100],
        strong: colors.teal[700],
      },
      selected: colors.gray[100],
    },
  },
};

const lightTheme = {
  colors: lightColorTheme,
};

export { lightTheme };
