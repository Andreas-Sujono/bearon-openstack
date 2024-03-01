import React from 'react';
import {
  CSSProps,
  CommonStyleProps,
  classes,
  getDefaultClassName,
} from '../utils';
import { Box, BoxProps } from './Box';

export interface GradientBorderBoxProps extends CommonStyleProps, BoxProps {
  children?: React.ReactNode;
  borderRadius?: number; //must be in rem
  borderWidth?: string | number;
  containerStyle?: CSSProps;
  gradient?: string;
  className?: string;
}

const GradientBorderBox = ({
  borderRadius = 0.5,
  borderWidth = '1px',
  containerStyle = {},
  children,
  gradient,
  sx,
  className,
  ...props
}: GradientBorderBoxProps) => {
  props.background = props.background || 'backgroundLight';
  return (
    <Box
      sx={{
        position: 'relative',
        background: gradient,
        padding: borderWidth,
        borderRadius: borderRadius + 'rem',
        ...(containerStyle as Record<string, string>),
      }}
      className={classes(className, getDefaultClassName('gradientBorderBox'))}
    >
      <Box
        sx={{
          borderRadius: borderRadius * 0.5 + 'rem',
          width: '100%',
          height: '100%',
          ...((sx || {}) as Record<string, string>),
        }}
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export { GradientBorderBox };
