import styled from 'styled-components';
import {
  InternalCommonStyleProps,
  parseColor,
  parseCommonProps,
} from '../utils';

export const StyledDivider = styled.div<
  InternalCommonStyleProps & {
    $lineWidth?: string | number;
    $lineHeight?: string | number;
  }
>`
  position: relative;
  width: ${(props) => props.$lineWidth};
  height: ${(props) => props.$lineHeight};
  --line-color: ${(props) =>
    parseColor(props.$background, props.$backgroundOpacity as number)};
  --line-height: ${(props) => props.$lineHeight};
  opacity: ${(props) => props.$backgroundOpacity || '0.5'};

  > div:first-child {
    width: 100%;
    height: 100%;
    background-color: var(--line-color);
    color: var(--line-color);
    opacity: 1;
    transition-property: opacity;
    transition-duration: var(--durationLg);
    transition-timing-function: var(--bezierFastoutSlowin);
    transform-origin: left center;
    transform: scaleX(1);

    @media (prefers-reduced-motion: no-preference) {
      transition-property: transform, opacity;
    }

    &[data-collapsed='true'] {
      opacity: 0;
      transform: scaleX(0);
    }
  }

  ${(props) => parseCommonProps(props)}
`;

export const StyledNotch = styled.div<
  InternalCommonStyleProps & {
    $notchWidth?: string | number;
    $notchHeight?: string | number;
  }
>`
  color: var(--line-color);
  background-color: currentColor;
  position: absolute;
  transition-property: opacity;
  transition-duration: var(--durationLg);
  transition-timing-function: var(--bezierFastoutSlowin);
  opacity: 1;
  clip-path: polygon(0 -1px, 100% -1px, calc(100% - 10px) 100%, 10px 100%);
  width: ${(props) => props.$notchWidth};
  height: ${(props) => props.$notchHeight};
  top: var(--line-height);

  @media (prefers-reduced-motion: no-preference) {
    transition-property: clip-path, opacity;
  }

  &[data-collapsed='true'] {
    opacity: 0;
    clip-path: polygon(0 -1px, 0 -1px, 10px 100%, 10px 100%);
  }

  ${(props) => parseCommonProps(props)}
`;
