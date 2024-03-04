import styled from 'styled-components';
import { FontWeight, TextVariant } from './types';
import { InternalCommonStyleProps, parseCommonProps } from '../utils';

export const parseFontSize = (size?: TextVariant | string) => {
  if (size === 'xxs') return `var(--fontSizeBodyXxs)`;
  if (size === 'xs') return `var(--fontSizeBodyXs)`;
  if (size === 'sm') return `var(--fontSizeBodySm)`;
  if (size === 'md') return `var(--fontSizeBodyMd)`;
  if (size === 'lg') return `var(--fontSizeBodyLg)`;
  if (size === 'xl') return `var(--fontSizeBodyXl)`;
  if (size === 'h5' || size === '5') return `var(--fontSizeH5)`;
  if (size === 'h4') return `var(--fontSizeH4)`;
  if (size === 'h3') return `var(--fontSizeH3)`;
  if (size === 'h2') return `var(--fontSizeH2)`;
  if (size === 'h1') return `var(--fontSizeH1)`;
  return `inherit`;
};

export const parseFontWeight = (weight?: FontWeight) => {
  if (weight === 'auto') return `inherit`;
  if (weight === 'regular') return `var(--fontWeightRegular);`;
  if (weight === 'medium') return `var(--fontWeightMedium);`;
  if (weight === 'bold') return `var(--fontWeightBold);`;
  return `${weight || 'inherit'}`;
};

export const StyledText = styled.div<
  {
    $size?: TextVariant;
    $color?: string;
    $align?: string;
    $weight?: FontWeight;
    $display?: string;
    $ff?: string;
    $maxLine?: number;
  } & InternalCommonStyleProps
>`
  font-size: ${(props) => parseFontSize(props.$size)};
  font-weight: ${(props) => parseFontWeight(props.$weight)};
  text-align: ${(props) => props.$align || 'initial'};
  line-height: var(--lineHeightBody);
  color: inherit;
  display: ${(props) => props.$display || 'inline'};
  ${(props) => props.$ff && { fontFamily: `var(--${props.$ff})` }};

  &[data-secondary='true'] {
    color: var(--textLight);
  }

  ${(props) =>
    props.$maxLine && {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: props.$maxLine,
      lineClamp: props.$maxLine,
      WebkitBoxOrient: 'vertical',
    }}

  ${(props) => parseCommonProps(props)}
`;

export const StyledHeading = styled.div<
  {
    $size?: TextVariant;
    $align?: string;
    $weight?: FontWeight;
    $ff?: string;
  } & InternalCommonStyleProps
>`
  font-size: ${(props) => parseFontSize(props.$size)};
  font-weight: ${(props) => parseFontWeight(props.$weight)};
  text-align: ${(props) => props.$align};
  line-height: var(--lineHeightTitle);
  color: var(--textTitle);
  margin: 0;
  ${(props) => props.$ff && { fontFamily: `var(--${props.$ff})` }};

  &[data-secondary='true'] {
    color: var(--textLight);
  }

  ${(props) => parseCommonProps(props)}
`;

export const StyledLink = styled.a<
  {
    $size?: TextVariant;
    $align?: string;
    $weight?: FontWeight;
    $disabled?: boolean;
  } & InternalCommonStyleProps
>`
  font-size: ${(props) => parseFontSize(props.$size)};
  font-weight: ${(props) => parseFontWeight(props.$weight)};
  text-align: ${(props) => props.$align};

  --lineStrokeWidth: 2px;
  --linkColor: var(--primary);
  --lineOpacity: 0;
  --filled-line-gradient: linear-gradient(var(--linkColor), var(--linkColor));
  --unfilled-line-gradient: linear-gradient(transparent, transparent);

  ${(props) =>
    props.$disabled && {
      '--filled-line-gradient': 'transparent',
      '--unfilled-line-gradient': 'transparent',
    }}

  cursor: pointer;
  display: inline;
  color: var(--linkColor);
  background: var(--filled-line-gradient) no-repeat 100% 100% / 0
      var(--lineStrokeWidth),
    var(--unfilled-line-gradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);
  padding-bottom: var(--lineStrokeWidth);
  text-decoration: none;

  &:hover,
  &:focus {
    background: var(--filled-line-gradient) no-repeat 0 100% / 100%
        var(--lineStrokeWidth),
      var(--unfilled-line-gradient) no-repeat 0 100% / 100%
        var(--lineStrokeWidth);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition-duration: var(--durationMd);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-property: background-size;
  }

  &[data-secondary='true'] {
    --linkColor: var(--textLight);
  }

  &:hover,
  &:active {
    filter: brightness(0.5);
  }
  ${(props) => parseCommonProps(props)}
`;
