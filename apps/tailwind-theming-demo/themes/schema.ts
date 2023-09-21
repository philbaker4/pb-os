import { HexCode, StrippedColorTheme } from 'tailwind-theming-plugin/src';

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

// StrippedColorTheme is a utility type that removes invalid properties & ensures valid theme definitions
// valid properties are found in TAILWIND_COLOR_KEY_MAP in tailwind-theming-plugin/src/lib/config-mapper.ts
type ColorThemeSchema = StrippedColorTheme<{
  backgroundColor: BackgroundColorSchema;
  textColor: TextColorSchema;
  borderColor: BorderColorSchema;
  // test is removed from ColorThemeSchema
  test: HexCode;
}>;

export type { ColorThemeSchema };
