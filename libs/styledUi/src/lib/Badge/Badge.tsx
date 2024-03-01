import React, { HTMLAttributes } from 'react';
import {
  CommonStyleProps,
  getDefaultClassName,
  parseProps,
} from '../utils/styles';
import { TextVariant } from '../Text';
import { StyledBadge } from './Styles';
import { classes } from '../utils';

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  children?: React.ReactNode;
  size?: TextVariant;
}

export default function Badge({
  children,
  className,
  size = 'xs',
  background = 'primary',
  ...props
}: BadgeProps) {
  return (
    <StyledBadge
      className={classes(className, getDefaultClassName('badge'))}
      $size={size}
      $background={background}
      {...parseProps(props)}
    >
      {children}
    </StyledBadge>
  );
}
