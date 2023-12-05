import { bearStyled } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';

const parseSize = (size?: TextVariant) => {
  if (size === 'xs') return `0.325rem 0.5rem`;
  if (size === 'sm') return `0.5rem 0.725rem`;
  if (size === 'md') return `0.875rem 1rem`;
  if (size === 'lg') return `1rem 1.25rem`;
  if (size === 'xl') return `1.5rem`;
  if (size === 'h5') return `2rem`;
  if (size === 'h4') return `3rem`;
  if (size === 'h3') return `4rem`;
  if (size === 'h2') return `5rem`;
  if (size === 'h1') return `6rem`;
  return `0.5rem 0.725rem`;
};

const parseFontSize = (size?: string) => {
  if (size === 'xs') return `var(--fontSizeBodyXs)`;
  if (size === 'sm') return `var(--fontSizeBodysm)`;
  if (size === 'md') return `var(--fontSizeBodyMd)`;
  if (size === 'lg') return `var(--fontSizeBodyLg)`;
  if (size === 'xl') return `var(--fontSizeBodyXl)`;
  if (size === 'h5') return `2rem`;
  if (size === 'h4') return `3rem`;
  if (size === 'h3') return `4rem`;
  if (size === 'h2') return `5rem`;
  if (size === 'h1') return `6rem`;
  return `var(--fontSizeBodysm)`;
};

export const StyledBadge = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    color: white;
    padding: ${parseSize(props.$size)};
    font-size: ${parseFontSize(props.$size)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: min-content;
    white-space: nowrap;
    border-radius: 0.5rem;
    gap: 2px;
`;
