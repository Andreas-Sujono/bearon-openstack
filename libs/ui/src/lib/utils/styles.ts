import {
  bearCss,
  cleanObject,
  convertObjectToCss,
  numToPx,
} from '@bearon/utils';
import React from 'react';
import { ThemeColor, mediaScreen } from '../ThemeProvider';

//common style that can be applied to layout components,  and some other components
export interface BearStyleProps {
  sx?: React.CSSProperties;
  sxS?: React.CSSProperties; //0 - mobile
  sxM?: React.CSSProperties; //mobile - laptop
  sxL?: React.CSSProperties; //> laptop
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  colour?: ThemeColor;
  background?: ThemeColor;
  backgroundOpacity?: number | string;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
}

export const parseBackgroundColorCss = (
  background: string,
  backgroundOpacity?: number | string
) => `rgb(var(--rgb${background[0]
  .toUpperCase()
  .concat(background.slice(1))})  / ${backgroundOpacity || 1}
)`;

export const parseThemeSizeCss = () => {
  //
};

export const createBearStyleClass = <T>(
  props: T & BearStyleProps,
  injectedStyle: React.CSSProperties = {},
  customProperties: Record<string, string | number> = {}
) => {
  props.sx = cleanObject(props.sx || {});
  props.sx = cleanObject({ ...injectedStyle, ...props.sx });

  props.sxS = cleanObject(props.sxS || {});
  props.sxM = cleanObject(props.sxM || {});
  props.sxL = cleanObject(props.sxL || {});

  return bearCss`
    ${props.mt ? `margin-top: ${numToPx(props.mt)};` : ''}
    ${props.ml ? `margin-left: ${numToPx(props.ml)};` : ''}
    ${props.mr ? `margin-right: ${numToPx(props.mr)};` : ''}
    ${props.mb ? `margin-bottom: ${numToPx(props.mb)};` : ''}
    ${props.colour ? `color: var(--${props.colour});` : ''}
    ${
      props.background
        ? `background: ${parseBackgroundColorCss(
            props.background,
            props.backgroundOpacity
          )};`
        : ''
    }

    ${
      props.maxWidth
        ? `max-width: ${
            props.maxWidth === 'sm'
              ? 'var(--maxWidthSm)'
              : props.maxWidth === 'md'
              ? 'var(--maxWidthMd)'
              : props.maxWidth === 'lg'
              ? 'var(--maxWidthLg)'
              : props.maxWidth === 'xl'
              ? 'var(--maxWidthXl)'
              : '100%'
          };`
        : ''
    }
    
    ${convertObjectToCss(props.sx as Record<string, string>)}
    ${convertObjectToCss(customProperties)};

    ${
      Object.keys(props.sxS).length > 0
        ? `${mediaScreen.maxMobileS}{
        ${convertObjectToCss(props.sxS as Record<string, string>)}
      }`
        : ''
    }

    ${
      Object.keys(props.sxM).length > 0
        ? `${mediaScreen.minMobile}{
        ${convertObjectToCss(props.sxM as Record<string, string>)}
      }`
        : ''
    }

    ${
      Object.keys(props.sxL).length > 0
        ? `${mediaScreen.minLaptop}{
        ${convertObjectToCss(props.sxL as Record<string, string>)}
      }`
        : ''
    }
    
    `;
};

export const extractStyleProps = <T>(
  props: T & BearStyleProps
): [BearStyleProps, T] => {
  const {
    sx,
    sxS,
    sxM,
    sxL,
    maxWidth,
    mt,
    mb,
    mr,
    ml,
    background,
    colour,
    backgroundOpacity,
    ...rest
  } = props;

  const styleProps: BearStyleProps = {
    sx,
    sxS,
    sxM,
    sxL,
    maxWidth,
    mt,
    mb,
    mr,
    ml,
    background,
    colour,
    backgroundOpacity,
  };
  return [styleProps, rest as T];
};
