export * from './cssInJs';

/**
 * Convert a px string to a number
 */
export const pxToNum = (px: string) => Number(px.replace('px', ''));

/**
 * Convert a number to a px string
 */
export const numToPx = (num: number | string) =>
  typeof num === 'number' ? `${num}px` : num;

/**
 * Convert pixel values to rem for a11y
 */
export const pxToRem = (px: number) => `${px / 16}rem`;

/**
 * Convert ms token values to a raw numbers for ReactTransitionGroup
 * Transition delay props
 */
export const msToNum = (msString: string) => Number(msString.replace('ms', ''));

/**
 * Convert a number to an ms string
 */
export const numToMs = (num: number | string) => `${num}ms`;

/**
 * Convert an rgb theme property (e.g. rgbBlack: '0 0 0')
 * to values that can be spread into a ThreeJS Color class
 */
export const rgbToThreeColor = (rgb: string) =>
  rgb?.split(' ').map((value) => Number(value) / 255) || [];

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
export function cssProps(props: Record<string, string | number>, style = {}) {
  const result = {} as Record<string, string>;

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key as keyof React.CSSProperties] as string;

    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value);
    }

    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value);
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}

/**
 * Concatenate classNames together
 */
export function classes(...classes: (string | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const convertCssToObject = (styles: string) => {
  const res = styles
    .split(';')
    .map((cur) => cur.split(':'))
    .reduce((acc: Record<string, string>, val) => {
      // eslint-disable-next-line prefer-const
      let [key, value] = val;
      key = key.replace(/-./g, (css) => css.toUpperCase()[1]);
      acc[key] = value;
      return acc;
    }, {});

  return res;
};

export const convertObjectToCss = (style: Record<string, string | number>) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase() +
      ':' +
      style[key] +
      ';',
    ''
  );
};

function componentToHex(c: string | number) {
  c = Number(c);
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(rgb: string) {
  let [r, g, b] = rgb.split(',');
  if (!r || !g || !b) [r, g, b] = rgb.split(' ');

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
