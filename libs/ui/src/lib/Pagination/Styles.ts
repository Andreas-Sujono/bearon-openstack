import { bearStyled, numToPx } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';
import { parseBackgroundColorCss, parseFontSize } from '../utils/styles';

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
    gap: ${numToPx(props.$gap, '2px')};
    padding-right: 2rem;
    font-size: ${parseFontSize(props.$size || 'sm')};

    .bear-pagination-arrow-btn:disabled{
      background: transparent !important;
    }
`;

export const StyledPaginationItem = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
    $activeBackground?: ThemeColor;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('button', props)`
    font-size: ${parseFontSize(props.$size || 'sm')};
    padding: 0.4em 0.725em;
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
