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
    default: {
      _: colors.gray[700],
      strong: colors.gray[950],
      subdued: colors.gray[500],
      light: colors.gray[400],
    },
    selected: colors.blue[600],
  },
  borderColor: {
    highlight: colors.gray[200],
  },
  // re-add to verify that theme is structurally valid
  // test: colors.black,
};

const lightTheme = {
  colors: lightColorTheme,
};

export { lightTheme };
