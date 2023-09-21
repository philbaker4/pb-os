import colors from 'tailwindcss/colors';
import { ColorThemeSchema } from './schema';

const darkColorTheme: ColorThemeSchema = {
  backgroundColor: {
    default: colors.gray[900],
    surface: {
      default: {
        _: colors.gray[800],
        subdued: colors.gray[700],
        selected: colors.gray[700],
      },
      highlight: {
        _: colors.gray[500],
        subdued: colors.gray[700],
      },
      primary: {
        _: colors.gray[700],
        strong: colors.blue[300],
      },
    },
  },
  textColor: {
    default: colors.gray[50]
  }
};

const darkTheme = {
  colors: darkColorTheme,
};

export { darkTheme };
