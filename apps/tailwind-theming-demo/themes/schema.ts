import { HexCode } from 'tailwind-theming-plugin/src';

type BackgroundColorSchema = {
  default: HexCode;
  surface: {
    _: HexCode;
    selected: HexCode;
    subdued: HexCode;
    primary: {
      _: HexCode;
      strong: HexCode;
    };
    default: {
      _: HexCode;
      subdued: HexCode;
      selected: HexCode;
    };
    highlight: {
      _: HexCode;
      subdued: HexCode;
    };
  };
};
type ColorThemeSchema = {
  backgroundColor: BackgroundColorSchema;
};

export type { ColorThemeSchema };
