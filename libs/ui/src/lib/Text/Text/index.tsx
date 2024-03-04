import React, { HTMLAttributes } from 'react';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../../utils';
import { FontWeight, TextVariant } from '../types';
import { StyledText } from '../styles';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  children?: React.ReactElement | string[] | string | React.ReactNode;
  size?: TextVariant;
  component?: React.ElementType;
  align?: 'initial' | 'start' | 'center';
  weight?: FontWeight;
  secondary?: boolean;
  className?: string;
  display?: 'block' | 'inline' | 'inline-block';
  ff?: string; //must be a variable name
  maxLine?: number; //if not undefined, will use webkitLineClamp
}

const Text = ({
  children,
  component: Component = 'span',
  secondary,
  className,
  size,
  align,
  weight,
  display,
  ff,
  maxLine,
  ...props
}: Props) => {
  return (
    <StyledText
      className={classes(className, getDefaultClassName('text'))}
      data-secondary={secondary}
      as={Component}
      $align={align}
      $weight={weight}
      $display={display}
      $size={size}
      $ff={ff}
      $maxLine={maxLine}
      {...parseProps(props)}
    >
      {children}
    </StyledText>
  );
};

export { Text };
export { EllipsisText, MiddleEllipsisText } from './TextEllipsis';
