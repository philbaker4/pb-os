import { HexCode } from './color-utilities';
import { getRgbaChannels } from './color-utilities';

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}
type NestedColorDefinition = RecursiveKeyValuePair<string,HexCode>

// Keys used in tailwind config to define color utilities
// statically pulled from https://github.com/tailwindlabs/tailwindcss/blob/3e16028406aa47351434d29b60da5db3935413b5/types/config.d.ts#L83
const tailwindColorKeyMap = {
  divideColor: 'divide',
  borderColor: 'border',
  backgroundColor: 'bg',
  gradientColorSteps: 'gradient',
  fill: 'fill',
  stroke: 'stroke',
  textColor: 'text',
  textDecorationColor: 'decoration',
  // variant
  // placeholderColor: '',
  caretColor: 'caret',
  accentColor: 'accent',
  boxShadowColor: 'box-shadow',
  outlineColor: 'outline',
  ringColor: 'ring',
  ringOffsetColor: 'ring-offset',
} as const;

type TailwindColorKey = keyof typeof tailwindColorKeyMap;



function remapColorsInputToUtilities(
  mapType: 'varDeclaration' | 'varReferences',
  input: NestedColorDefinition,
  path: string[] = [],
  response: { [key: string]: string }
): { [key: string]: string } {
  for (const [key, value] of Object.entries(input)) {
    const newPath = path.concat(key);

    // remove color type prefix from utility name, tailwind will add that back
    // e.g., bg
    const utilityName = newPath.slice(1).join('-');

    // variable name DOES include color type prefix
    // e.g., bg
    const variableName = `--${newPath.join('-')}`;
    // if rgb string
    if (typeof value === 'string') {
      if (mapType === 'varReferences') {
        response[utilityName] = `rgb(var(${variableName}) / <alpha-value>)`;
      } else {
        const [r, g, b] = getRgbaChannels(value);
        response[variableName] = [r, g, b].join(' ');
      }
    } else {
      const newValue: NestedColorDefinition = {};
      for (const [k1, v1] of Object.entries(value)) {
        // if k1 is an underscore, root color in an object
        // e.g. { backgroundColor: { primary: { _: '25 30 45' } } } should map to bg-primary
        if (k1 === '_') {
          if (mapType === 'varReferences') {
            response[utilityName] = `rgb(var(${variableName}) / <alpha-value>)`;
          } else {
            // cast to string as _ will never be a key for an object
            // todo: enforce this at the type level?
            const [r, g, b] = getRgbaChannels(v1 as string);
            response[variableName] = [r, g, b].join(' ');
          }
        } else {
          newValue[k1] = v1;
        }
      }
      remapColorsInputToUtilities(mapType, newValue, newPath, response);
    }
  }
  return response;
}

// Generate utility classes for CSS variables
function getColorUtilities<
  ColorTheme extends { [key in TailwindColorKey]?: NestedColorDefinition }
>(colorTheme: ColorTheme) {
  const typeUtilities: { [key: string]: { [key: string]: string } } = {};

  for (const [type, def] of Object.entries(colorTheme)) {
    const tAbbrev = tailwindColorKeyMap[type as TailwindColorKey];
    const res = remapColorsInputToUtilities('varReferences', def, [tAbbrev], {});
    typeUtilities[type] = res;
  }
  return typeUtilities;
}

// Generate CSS variables
function getColorCssVariables<
  ColorTheme extends { [key in TailwindColorKey]?: NestedColorDefinition }
>(colorTheme: ColorTheme) {
  const typeVariables: { [key: string]: { [key: string]: string } } = {};
  for (const [type, def] of Object.entries(colorTheme)) {
    const tAbbrev = tailwindColorKeyMap[type as TailwindColorKey];
    const res = remapColorsInputToUtilities(
      'varDeclaration',
      def,
      [tAbbrev],
      {}
    );
    typeVariables[type] = res;
  }

  const variables = {};
  for (const vars of Object.values(typeVariables)) {
    Object.assign(variables, vars);
  }
  return variables;
}



export type { TailwindColorKey, NestedColorDefinition };
export {
  getColorCssVariables,
  getColorUtilities,
};
