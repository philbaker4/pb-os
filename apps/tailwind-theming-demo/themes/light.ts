import colors from 'tailwindcss/colors';
import { ColorThemeSchema } from './schema';

const lightColorTheme: ColorThemeSchema = {
  backgroundColor: {
    default: colors.white,
    surface: {
      default: {
        _: colors.white,
        subdued: colors.gray[50],
        selected: colors.blue[50],
      },
      highlight: {
        _: colors.gray[300],
        subdued: colors.gray[100],
      },
      primary: {
        _: colors.blue[50],
        strong: colors.blue[600],
      },
    },
  },
  textColor: {
    default: colors.gray[900]
  }
};

const lightTheme = {
  colors: lightColorTheme,
};

export { lightTheme };
