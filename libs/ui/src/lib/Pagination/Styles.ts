import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import styled from 'styled-components';
import {
  InternalCommonStyleProps,
  getDefaultClassName,
  numToPx,
  parseColor,
} from '../utils';
import { parseFontSize } from '../Text/styles';

export const StyledPagination = styled.div<
  InternalCommonStyleProps & {
    $gap?: string | number;
    $size?: string;
  }
>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0.2rem;
  gap: ${(props) => numToPx(props.$gap, '2px')};
  padding-right: 2rem;
  font-size: ${(props) => parseFontSize(props.$size || 'sm')};

  ${'.' + getDefaultClassName('pagination-arrowBtn')}:disabled {
    background: transparent !important;
  }
`;

export const StyledPaginationItem = styled.button<
  InternalCommonStyleProps & {
    $size?: TextVariant;
    $activeBackground?: ThemeColor;
  }
>`
  font-size: ${(props) => parseFontSize(props.$size || 'sm')};
  padding: 0.4em 0.725em;
  border-radius: 0.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition-property: opacity, color, background;
  transition-duration: 0;
  transition-timing-function: var(--bezierFastoutSlowin);

  &:hover {
    background: color-mix(
      in srgb,
      ${(props) => parseColor(props.$activeBackground || 'primary', 1)} 8%,
      transparent
    );
    filter: none;
  }

  &[data-active='true'] {
    background: ${(props) =>
      parseColor(props.$activeBackground || 'primary', 0.5)};
    color: white;
    &:hover {
      background: color-mix(
        in srgb,
        ${(props) => parseColor(props.$activeBackground || 'primary', 0.5)} 90%,
        black
      );
    }
  }
`;
