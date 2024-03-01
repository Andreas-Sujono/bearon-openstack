import tinycolor from 'tinycolor2';
import {
  CSSProperties,
  CSSPseudos,
  RuleSet,
  StyleFunction,
} from 'styled-components';
import { Theme, ThemeColor, mediaScreen, themes } from '../ThemeProvider';
import { cleanSxObject, convertObjectToCss, deepCopy, numToPx } from './format';
import { presetColors } from './colors';

//styled component CSS object
type CSSObject<Props extends object> = StyledObject<Props>;
type ExtendedCssProperties = {
  [key in keyof CSSProperties]:
    | CSSProperties[key]
    | {
        sm?: CSSProperties[key];
        md?: CSSProperties[key];
        lg?: CSSProperties[key];
      };
};
interface StyledObject<Props extends object> extends ExtendedCssProperties {
  [key: string]:
    | StyledObject<Props>
    | CSSProperties
    | CSSPseudos
    | string
    | number
    | StyleFunction<Props>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | RuleSet<any>
    | undefined;
}

export type CSSProps = CSSObject<CommonStyleProps>;

/**
 * common style that can be applied to layout components, and some other components
 * Note: remember to parse this props using `parseProps` function for style component compability
 */
export interface CommonStyleProps {
  sx?: CSSProps;
  // sxXs?: CSSProps; //0 - mobileSm
  sxSm?: CSSProps; //mobileSm - mobile
  sxMd?: CSSProps; //mobile - laptop
  sxLg?: CSSProps; //> laptop
  maxWidth?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'full'
    | (string & Record<never, never>);
  colour?: ThemeColor; //legacy color, keep for backward compatibility
  color?: ThemeColor;
  background?: ThemeColor;
  backgroundOpacity?: number | string;
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;
  br?: string | number;
}

//interal props used to passed to the styled component, not used by the user
export type InternalCommonStyleProps = {
  [key in keyof CommonStyleProps as `$${key}`]: CommonStyleProps[key];
};

type CommonStyleKeys = keyof CommonStyleProps;
/**
 * this function parse raw props from user to the style component transient props to make sure that the props are not rendered in the HTML component
 * @param props
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseProps = (props: Record<string, any>) => {
  if (!props) return props;

  const parsedProps = deepCopy({
    ...props,
    sx: props.sx || {},
    sxSm: props.sxSm || {},
    sxMd: props.sxMd || {},
    sxLg: props.sxLg || {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  Object.keys(parsedProps).forEach((key) => {
    if (
      (
        [
          'sx',
          'sxSm',
          'sxMd',
          'sxLg',
          'maxWidth',
          'backgroundOpacity',
          'colour',
          'color',
          'background',
          'm',
          'mt',
          'mb',
          'mr',
          'ml',
          'p',
          'pt',
          'pb',
          'pr',
          'pl',
          'br',
        ] as CommonStyleKeys[]
      ).includes(key as CommonStyleKeys)
    ) {
      parsedProps['$' + key] = props[key];
      delete parsedProps[key];
    }
  });
  parsedProps.$sxSm = parsedProps.$sxSm || {};
  parsedProps.$sxMd = parsedProps.$sxMd || {};
  parsedProps.$sxLg = parsedProps.$sxLg || {};
  return parsedProps;
};

export const parseColor = (color?: string, opacity?: number) => {
  if (
    color?.startsWith('rgb') ||
    color?.startsWith('#') ||
    color?.startsWith('var') ||
    ['inherit', 'unset', 'initial', null, undefined, ''].includes(color) ||
    presetColors.includes(color as string)
  ) {
    return color || '';
  }

  if (!opacity || !themes?.activeTheme?.[color as 'themeId'])
    return `var(--${color})`;
  return `color-mix(in srgb, var(--${color}) ${opacity * 100}%, transparent)`;
};

/**
 * core parse props to styled components, make sure props is already parsed to transient props
 * @param props
 * @returns
 */
export const parseCommonProps = <T>(
  props: T & InternalCommonStyleProps & { theme: Theme }
) => {
  let { obj: sxSmParsed } = cleanSxObject(props.$sxSm || {});
  let { obj: sxMdParsed } = cleanSxObject(props.$sxMd || {});
  let { obj: sxLgParsed } = cleanSxObject(props.$sxLg || {});
  const {
    obj: sxParsed,
    sxSm: sxSm2,
    sxMd: sxMd2,
    sxLg: sxLg2,
  } = cleanSxObject(props.$sx || {}, {
    sxSm: sxSmParsed,
    sxMd: sxMdParsed,
    sxLg: sxLgParsed,
  });
  sxSmParsed = sxSm2;
  sxMdParsed = sxMd2;
  sxLgParsed = sxLg2;

  const maxWidth = props.$maxWidth;

  const parsedColor = parseColor(props.$color || props.$colour || '');

  const res = `
    ${props.$m ? `margin: ${numToPx(props.$m)};` : ''}
    ${props.$mt ? `margin-top: ${numToPx(props.$mt)};` : ''}
    ${props.$ml ? `margin-left: ${numToPx(props.$ml)};` : ''}
    ${props.$mr ? `margin-right: ${numToPx(props.$mr)};` : ''}
    ${props.$mb ? `margin-bottom: ${numToPx(props.$mb)};` : ''}
    ${props.$p ? `padding: ${numToPx(props.$p)};` : ''}
    ${props.$pt ? `padding-top: ${numToPx(props.$pt)};` : ''}
    ${props.$pl ? `padding-left: ${numToPx(props.$pl)};` : ''}
    ${props.$pr ? `padding-right: ${numToPx(props.$pr)};` : ''}
    ${props.$pb ? `padding-bottom: ${numToPx(props.$pb)};` : ''}
    ${props.$br ? `border-radius: ${numToPx(props.$br)};` : ''}

    ${parsedColor ? `color: ${parsedColor};` : ''}
    ${
      props.$background &&
      props.theme &&
      props.theme[props.$background as 'primary']
        ? `background: ${tinycolor(props.theme[props.$background as 'primary'])
            .setAlpha(Number(props?.$backgroundOpacity || 1))
            .toRgbString()};`
        : ''
    }
    ${
      props.$background &&
      props.theme &&
      !props.theme[props.$background as 'primary']
        ? `background: ${parseColor(props.$background)};`
        : ''
    }

    ${
      maxWidth
        ? `max-width: ${
            maxWidth === 'full'
              ? '100%'
              : maxWidth === 'sm'
              ? 'var(--maxWidthSm)'
              : maxWidth === 'md'
              ? 'var(--maxWidthMd)'
              : maxWidth === 'lg'
              ? 'var(--maxWidthLg)'
              : maxWidth === 'xl'
              ? 'var(--maxWidthXl)'
              : maxWidth
          };`
        : ''
    }
    
    ${convertObjectToCss(sxParsed)}

    ${
      Object.keys(sxSmParsed).length > 0
        ? `${mediaScreen.maxMobileSm}{
        ${convertObjectToCss(sxSmParsed)}
      }`
        : ''
    }

    ${
      Object.keys(sxMdParsed).length > 0
        ? `${mediaScreen.minMobile}{
        ${convertObjectToCss(sxMdParsed)}
      }`
        : ''
    }

    ${
      Object.keys(sxLgParsed).length > 0
        ? `${mediaScreen.minLaptop}{
        ${convertObjectToCss(sxLgParsed)}
      }`
        : ''
    }
    `.trim();

  return res;
};

//change with your own protocol or project name here
export const getDefaultClassName = (postfix: string) =>
  postfix ? `native-${postfix}` : '';
