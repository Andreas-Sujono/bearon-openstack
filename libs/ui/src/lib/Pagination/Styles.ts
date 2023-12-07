import { bearStyled, numToPx } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { parseBackgroundColorCss } from '../utils/styles';

export const StyledPagination = (
  props: {
    $size?: TextVariant;
    $gap?: string | number;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 0.2rem;
    gap: ${numToPx(props.$gap, '6[x')};
    padding-right: 2rem;
`;

export const StyledPaginationItem = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
    $activeBackground?: ThemeColor;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('button', props)`
    padding: 8px 12px;
    border-radius: 0.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition-property: opacity, color, background;
    transition-duration: 0;
    transition-timing-function: var(--bezierFastoutSlowin);

    &:hover{
      background: color-mix(
        in srgb,
        ${parseBackgroundColorCss(props.$activeBackground || 'primary', 1)} 8%,
        transparent
      );
      filter: none;
    }

    &[data-active='true']{
      background: ${parseBackgroundColorCss(
        props.$activeBackground || 'primary',
        0.5
      )};
      color: white;
      &:hover{
        background: color-mix(
          in srgb,
          ${parseBackgroundColorCss(
            props.$activeBackground || 'primary',
            0.5
          )} 90%,
          black
        );
      }
    }
`;
