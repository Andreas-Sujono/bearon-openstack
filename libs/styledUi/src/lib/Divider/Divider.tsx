import React from 'react';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';
import { StyledDivider } from './Styles';

interface DividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  lineWidth?: string | number;
  lineHeight?: string | number;
  collapseDelay?: number;
  collapsed?: boolean;
}
export const Divider = ({
  lineWidth,
  lineHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...props
}: DividerProps) => {
  return (
    <StyledDivider
      className={classes(className, getDefaultClassName('divider'))}
      $background={props.background || 'grey'}
      $backgroundOpacity={props.backgroundOpacity || 0.2}
      $lineWidth={lineWidth || '100%'}
      $lineHeight={lineHeight || '1px'}
      {...parseProps(props)}
    >
      <div data-collapsed={collapsed} />
    </StyledDivider>
  );
};

export { DividerProps };
