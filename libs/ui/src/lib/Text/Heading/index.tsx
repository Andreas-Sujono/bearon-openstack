import React from 'react';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../../utils';
import { StyledHeading } from '../styles';
import { FontWeight, TextVariant } from '../types';

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  children?: React.ReactElement | React.ReactElement[] | string;
  level?: number | string;
  as?: React.ElementType;
  align?: string;
  weight?: FontWeight;
  className?: string;
  ff?: string; //must be a variable name
}

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ff,
  ...props
}: Props) => {
  const clampedLevel = Math.min(Math.max(level as number, 0), 5);
  const Component = (as ||
    `h${Math.max(clampedLevel, 1)}`) as React.ElementType;

  return (
    <StyledHeading
      className={classes(className, getDefaultClassName('heading'))}
      as={Component}
      $size={Component as TextVariant}
      $weight={weight}
      $align={align}
      $ff={ff}
      {...parseProps(props)}
    >
      {children}
    </StyledHeading>
  );
};
