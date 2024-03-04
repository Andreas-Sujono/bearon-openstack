import moment from 'moment';
import numbro from 'numbro';

/**
 * Convert a px string to a number
 */
export const pxToNum = (px: string) => Number(px.replace('px', ''));

/**
 * Convert a number to a px string
 */
export const numToPx = (
  num: number | string | undefined | null,
  default_: string = '0'
) => (!num ? default_ : typeof num === 'number' ? `${num}px` : num);

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

const parseCssKey = (key: string) => {
  const res = key
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
  if (res.startsWith('webkit')) return `-${res}`;

  return res;
};

export const convertObjectToCss = (
  style: Record<string, string | number | Record<string, string>>
): string => {
  if (!style || !Object.keys(style).length) return '';

  return Object.keys(style).reduce((acc, key) => {
    if (typeof style[key] === 'object') {
      return (
        acc +
        `${key}{` +
        convertObjectToCss(style[key] as Record<string, string>) +
        '}'
      );
    }

    return (
      acc +
      parseCssKey(key) +
      ':' +
      (key === 'content' && style[key] === '' ? "''" : style[key]) +
      ';'
    );
  }, '');
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

export const formatDollarAmount = (
  num: number | undefined | '',
  digits = 2,
  round = true
) => {
  if (num === 0) return '$0.00';
  if (!num) return '-';
  if (num < 0.001 && digits <= 3) {
    return '<$0.001';
  }

  return numbro(num).formatCurrency({
    average: round,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
    },
  });
};

export const getDollarString = (value: number, decimal: number) => {
  return `$${value.toFixed(decimal)}`;
};

export const formatDate = (date: string | number, format = 'dd/MM/yyyy') => {
  return moment(date).format(format);
};

export const formatRelativeDate = (date: string | number) => {
  const yearsAgo = moment().diff(date, 'years');
  const monthsAgo = moment().diff(date, 'months');
  const daysAgo = moment().diff(date, 'days');
  const hoursAgo = moment().diff(date, 'hours');
  const minutesAgo = moment().diff(date, 'minutes');
  //   const secondsAgo = moment().diff(date, 'seconds');

  if (yearsAgo > 0) return `${yearsAgo} years ago`;
  if (monthsAgo > 0) return `${monthsAgo} months ago`;
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  if (minutesAgo > 0) return `${minutesAgo} minutes ago`;

  return 'a second ago';
};

export const truncateText = (text = '', [h, t]: number[] = [10, 4]): string => {
  const head = text.slice(0, h);
  const tail = text.slice(-1 * t, text.length);
  return text.length > h + t ? [head, tail].join('...') : text;
};

const abbreviateMap = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  p: 'padding',
  pt: 'paddingTop',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pb: 'paddingBottom',
};

export const cleanSxObject = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>,
  {
    sxSm,
    sxMd,
    sxLg,
    loop,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = {}
) => {
  sxSm = sxSm || {};
  sxMd = sxMd || {};
  sxLg = sxLg || {};

  Object.keys(obj).forEach((key) => {
    let parsedKey = key;

    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    } else {
      if (
        Object.keys(abbreviateMap).includes(key) ||
        Object.keys(abbreviateMap)
          .map((item) => '$' + item)
          .includes(key)
      ) {
        parsedKey =
          abbreviateMap[key as 'm'] || abbreviateMap[key.slice(1) as 'm'];
        obj[parsedKey] = obj[key];
        delete obj[key];
      }
    }

    if (
      typeof obj[parsedKey] === 'object' &&
      (obj[parsedKey].sm || obj[parsedKey].md || obj[parsedKey].lg)
    ) {
      if (obj[parsedKey].sm) {
        if (!sxSm[parsedKey]) sxSm[parsedKey] = {};
        sxSm[parsedKey] = obj[parsedKey].sm;
        delete obj[parsedKey].sm;
      }

      if (sxMd) {
        if (!sxMd[parsedKey]) sxMd[parsedKey] = {};
        sxMd[parsedKey] =
          obj[parsedKey].md || obj[parsedKey].sm || sxSm[parsedKey];
        delete obj[parsedKey].md;
      }

      if (sxLg) {
        if (!sxLg[parsedKey]) sxLg[parsedKey] = {};
        sxLg[parsedKey] =
          obj[parsedKey].lg || sxMd[parsedKey] || sxSm[parsedKey];
        delete obj[parsedKey].lg;
      }
      obj[parsedKey] = obj[parsedKey].lg || sxLg?.[parsedKey];
    } else if (typeof obj[parsedKey] === 'object') {
      if (sxSm) sxSm[parsedKey] = sxSm[parsedKey] || {};
      if (sxMd) sxMd[parsedKey] = sxMd[parsedKey] || {};
      if (sxLg) sxLg[parsedKey] = sxLg[parsedKey] || {};

      cleanSxObject(obj[parsedKey], {
        sxSm: sxSm?.[parsedKey] || {},
        sxMd: sxMd?.[parsedKey] || {},
        sxLg: sxLg?.[parsedKey] || {},
        loop: (loop || 0) + 1,
      });
    }
  });

  return {
    obj: obj || {},
    sxSm: sxSm || {},
    sxMd: sxMd || {},
    sxLg: sxLg || {},
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanObject = (obj: Record<string, any>) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
};

export function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item)) as T;
  }

  const copiedObject = {} as T;
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy(obj[key]);
    }
  }

  return copiedObject;
}
