import React from 'react';
import styled from 'styled-components';
import { classes, getDefaultClassName, parseColor } from '../utils';

const StyledCircularLoaderContainer = styled.div<{
  $color: string;
  $size: string;
}>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};

  > svg {
    fill: ${(props) => props.$color};
  }
`;

export interface CircularLoaderProps {
  color?: string;
  size?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const CircularLoader = ({
  color = 'primary',
  size = '36px',
  style,
  className,
}: CircularLoaderProps) => {
  return (
    <StyledCircularLoaderContainer
      className={classes(className, getDefaultClassName('loader'))}
      $color={parseColor(color)}
      $size={size}
      style={style}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </StyledCircularLoaderContainer>
  );
};

export const ThinCircularLoader = ({
  color,
  size = '36px',
  style,
  className,
}: CircularLoaderProps) => {
  return (
    <StyledCircularLoaderContainer
      className={classes(className, getDefaultClassName('thinLoader'))}
      $color={color || 'var(--primary)'}
      $size={size}
      style={style}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path d="M2 50A48 48 0 0 0 98 50A48 50 0 0 1 2 50" stroke="none">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51;360 50 51"
          ></animateTransform>
        </path>
      </svg>
    </StyledCircularLoaderContainer>
  );
};

export default CircularLoader;

export { Skeleton } from './Skeleton';
