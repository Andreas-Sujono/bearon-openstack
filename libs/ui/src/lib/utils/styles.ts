import { bearCss, convertObjectToCss, numToPx } from '@bearon/utils';
import React from 'react';
import { mediaScreen } from '../ThemeProvider';

//common style that can be applied to layout components,  and some other components
export interface BearStyleProps {
  sx?: React.CSSProperties;
  sxS?: React.CSSProperties; //0 - mobile
  sxM?: React.CSSProperties; //mobile - laptop
  sxL?: React.CSSProperties; //> laptop
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
}

export const createBearStyleClass = <T>(
  props: T & BearStyleProps,
  injectedStyle: React.CSSProperties = {},
  customProperties: Record<string, string> = {}
) => {
  props.sx = props.sx || {};
  props.sx = { ...injectedStyle, ...props.sx };

  props.sxS = props.sxS || {};
  props.sxM = props.sxM || {};
  props.sxL = props.sxL || {};

  return bearCss`
    ${props.mt ? `margin-top: ${numToPx(props.mt)};` : ''}
    ${props.ml ? `margin-left: ${numToPx(props.ml)};` : ''}
    ${props.mr ? `margin-right: ${numToPx(props.mr)};` : ''}
    ${props.mb ? `margin-bottom: ${numToPx(props.mb)};` : ''}
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
  const { sx, sxS, sxM, sxL, maxWidth, mt, mb, mr, ml, ...rest } = props;

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
  };
  return [styleProps, rest as T];
};
