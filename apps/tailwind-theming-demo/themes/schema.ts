import { HexCode } from 'tailwind-theming-plugin/src';

type BackgroundColorSchema = {
  default: HexCode;
  surface: {
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

type TextColorSchema = {
  default: {
    _: HexCode;
    subdued: HexCode;
    strong: HexCode;
    light: HexCode;
  };
  selected: HexCode;
};

type BorderColorSchema = {
  highlight: HexCode;
};
// todo: create helper to ensure matching Tailwind spec
type ColorThemeSchema = {
  backgroundColor: BackgroundColorSchema;
  textColor: TextColorSchema;
  borderColor: BorderColorSchema;
};

export type { ColorThemeSchema };
