import React from 'react';
import styled, { keyframes } from 'styled-components';
import { classes, parseColor } from '../utils';

const shimmer = keyframes`
    0% {
    transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
`;

const StyledSkeleton = styled.div<{
  $bg: string;
  $borderRadius?: string;
  $w?: string;
  $h?: string;
  $mt?: string;
  $mb?: string;
}>`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => parseColor(props.$bg)};
  border-radius: ${(props) => props.$borderRadius};
  width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  margin-top: ${(props) => props.$mt};
  margin-bottom: ${(props) => props.$mb};
  opacity: 0.5;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.6) 60%,
      rgba(255, 255, 255, 0.2) 80%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 50%;
    min-width: 200px;
    animation: ${shimmer} 1.4s infinite;
    content: '';
  }
`;

export interface CircularLoaderProps {
  bg?: string;
  style?: React.CSSProperties;
  borderRadius?: string;
  w?: string;
  h?: string;
  mt?: string;
  mb?: string;
  className?: string;
  circular?: boolean;
}

const Skeleton = ({
  bg,
  style,
  borderRadius = '10px',
  w,
  h,
  mt,
  mb,
  className,
  circular,
}: CircularLoaderProps) => {
  return (
    <StyledSkeleton
      className={classes(className, 'skeleton')}
      style={style}
      $bg={bg || 'var(--textLight)'}
      $borderRadius={circular ? '50%' : borderRadius}
      $w={w}
      $h={h}
      $mt={mt}
      $mb={mb}
    ></StyledSkeleton>
  );
};

export default Skeleton;
