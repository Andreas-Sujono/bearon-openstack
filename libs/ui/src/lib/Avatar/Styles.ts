import { bearStyled } from '@bearon/utils';
import React from 'react';
import { TextVariant } from '../Text';
import { ThemeColor } from '../ThemeProvider';

const parseSize = (size?: TextVariant) => {
  if (size === 'xs') return `2rem`;
  if (size === 'md') return `3rem`;
  if (size === 'lg') return `3.5rem`;
  if (size === 'xl') return `4rem`;
  if (size === 'h5') return `4.5rem`;
  if (size === 'h4') return `5rem`;
  if (size === 'h3') return `5.5rem`;
  if (size === 'h2') return `6rem`;
  if (size === 'h1') return `7rem`;
  return `3rem`;
};

export const StyledAvatar = (
  props: {
    $size?: TextVariant;
    $background?: ThemeColor;
    $withNotif?: boolean;
    children?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
    border-radius: 50%;
    color: white;
    width: ${parseSize(props.$size)};
    height: ${parseSize(props.$size)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${
      props.$withNotif
        ? `&::after {
        content: '';
        background: #c03434;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        bottom: -2px;
        right: -2px;
    }`
        : ''
    }
`;

export const StyledAvatarGroup = (
  props: {
    $size?: TextVariant;
    $borderColor?: string;
  } & React.HTMLAttributes<HTMLDivElement>
) => bearStyled('div', props)`
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      position: relative;
      width: min-content;
      
      > .bear-avatar-item:not(:last-child){
        margin-left: -1rem;
      }
      > .bear-avatar-item{
        border: 2px solid ${props.$borderColor || `var(--background)`};
      }
  `;
