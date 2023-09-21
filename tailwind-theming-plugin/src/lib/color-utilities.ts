import { z } from 'zod';

// todo: support hex code with alpha components
const HexSchema = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
type HexCode = z.infer<typeof HexSchema>;

function hexToRgba(hex: HexCode) {
  HexSchema.parse(hex);
  const hexCharacters = hex.substring(1, hex.length);

  let r, g, b;

  // regular hex
  if (hexCharacters.length === 6) {
    r = hexCharacters.substring(0, 2);
    g = hexCharacters.substring(2, 4);
    b = hexCharacters.substring(4, 6);
  }
  // three digit hex
  else {
    // just concat the pieces with themselves
    r = hexCharacters.substring(0, 1) + hexCharacters.substring(0, 1);
    g = hexCharacters.substring(1, 2) + hexCharacters.substring(1, 2);
    b = hexCharacters.substring(2, 3) + hexCharacters.substring(2, 3);
  }
  // return our clean values
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
  };
}
function getRgbaChannels(hex: HexCode) {
  const { red, green, blue } = hexToRgba(hex);
  return [red, green, blue];
}

export type { HexCode };
export { hexToRgba, getRgbaChannels, HexSchema };
