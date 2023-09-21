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
  default: HexCode;
}
// todo: create helper to ensure matching Tailwind spec
type ColorThemeSchema = {
  backgroundColor: BackgroundColorSchema;
  textColor: TextColorSchema
};

export type { ColorThemeSchema };
