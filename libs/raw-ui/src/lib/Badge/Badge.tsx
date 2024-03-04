import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { TextVariant } from '../Text';
import { StyledBadge } from './Styles';

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  children?: React.ReactNode;
  size?: TextVariant;
}

export default function Badge({
  children,
  className,
  size = 'xs',
  ...props
}: BadgeProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = styleProps.background || 'primary';
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <StyledBadge
      className={classes(styleClass, 'bear-badge', className)}
      $size={size}
      {...rest}
    >
      {children}
    </StyledBadge>
  );
}
