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

export const StyledBanner = (
  props: {
    $size?: TextVariant;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    color: white;
    padding: ${parseSize(props.$size)};
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 0.2rem;
    gap: 8px;
    padding-right: 2rem;

    &[data-status='exiting']{
      transform: scaleY(0);    
      transform-origin: top;
      overflow: hidden;
      opacity: 0;
    }

    @media (prefers-reduced-motion: no-preference) {
      transition-duration: var(--durationMd);
      transition-timing-function: var(--bezierFastoutSlowin);
      transition-property: opacity, transform ;
    }

    .bear-banner-close-btn{
      position: absolute;
      top: 15%;
      right: 4px;
    }
`;
