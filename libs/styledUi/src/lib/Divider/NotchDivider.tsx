import React from 'react';
import {
  CommonStyleProps,
  getDefaultClassName,
  parseProps,
} from '../utils/styles';
import { StyledDivider, StyledNotch } from './Styles';
import { classes } from '../utils';

export interface NotchDividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  lineWidth?: string | number;
  lineHeight?: string | number;
  notchWidth?: string | number;
  notchHeight?: string | number;
  collapsed?: boolean;
}
export const NotchDivider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapsed,
  className,
  style,
  ...props
}: NotchDividerProps) => {
  return (
    <StyledDivider
      className={classes(
        className,
        getDefaultClassName('divider'),
        getDefaultClassName('notchDivider')
      )}
      $background={props.background || 'grey'}
      $backgroundOpacity={props.backgroundOpacity || 0.5}
      $lineWidth={lineWidth || '100%'}
      $lineHeight={lineHeight || '1px'}
      {...parseProps(props)}
    >
      <div data-collapsed={collapsed} />
      <StyledNotch
        data-collapsed={collapsed}
        $notchWidth={notchWidth || 'clamp(20px, 50%, 90px)'}
        $notchHeight={notchHeight || '8px'}
      />
    </StyledDivider>
  );
};
