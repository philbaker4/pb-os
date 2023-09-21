import colors from 'tailwindcss/colors';
import { ColorThemeSchema } from './schema';

const contrastColorTheme: ColorThemeSchema = {
  backgroundColor: {
    default: colors.white,
    surface: {
      default: {
        _: colors.white,
        subdued: colors.gray[200],
        selected: colors.blue[100],
      },
      highlight: {
        _: colors.gray[400],
        subdued: colors.gray[200],
      },
      primary: {
        _: colors.blue[200],
        strong: colors.blue[600],
      },
    },
  },
  textColor: {
    default: {
      _: colors.gray[800],
      strong: colors.black,
      subdued: colors.gray[700],
      light: colors.gray[500],
    },
    selected: colors.blue[700],
  },
  borderColor: {
    highlight: colors.gray[500],
  },
  // re-add to verify that theme is structurally valid
  // test: colors.black,
};

const contrastTheme = {
  colors: contrastColorTheme,
};

export { contrastTheme };
