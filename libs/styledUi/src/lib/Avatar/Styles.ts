import React from 'react';
import styled from 'styled-components';
import { TextVariant } from '../Text';
import {
  InternalCommonStyleProps,
  getDefaultClassName,
  parseColor,
  parseCommonProps,
} from '../utils';

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

export const StyledAvatar = styled.div<
  {
    $size?: TextVariant;
    $withNotif?: boolean;
    children?: React.ReactNode;
  } & InternalCommonStyleProps
>`
  border-radius: 50%;
  color: white;
  width: ${(props) => parseSize(props.$size)};
  height: ${(props) => parseSize(props.$size)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${(props) =>
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
    }
    @keyframes ripple {
      0% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      100% {
        transform: scale(2.4);
        opacity: 0;
      }
    }
    span::after{
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 10px;
      height: 10px;
      background: #c03434;
      border-radius: 50%;
      animation: 1.2s ease-in-out 0s infinite normal none running ripple;
      content: "";
    }  
    `
      : ''}

  ${(props) => parseCommonProps(props)}
`;

export const StyledAvatarGroup = styled.div<
  {
    $size?: TextVariant;
    $borderColor?: string;
  } & InternalCommonStyleProps
>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  width: min-content;

  & > ${'.' + getDefaultClassName('avatarGroup-avatarItem')}:not(:last-child) {
    margin-left: -1rem;
  }
  & > ${'.' + getDefaultClassName('avatarGroup-avatarItem')} {
    border: 2px solid
      ${(props) => parseColor(props.$borderColor || '') || `var(--background)`};
  }

  ${(props) => parseCommonProps(props)};
`;
