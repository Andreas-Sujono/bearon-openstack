import React from 'react';
import { Row } from '../Layout';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';

export interface ButtonGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  align?: 'left' | 'center' | 'right';
  spacing?: string | number;
}

export function ButtonGroup({
  align = 'left',
  className,
  children,
  spacing,
  ...props
}: ButtonGroupProps) {
  return (
    <Row
      className={classes(className, getDefaultClassName('btnGroup'))}
      justifyContent={
        align === 'center'
          ? 'center'
          : align === 'right'
          ? 'flex-end'
          : 'flex-start'
      }
      gap={spacing}
      wrap
      {...parseProps(props)}
    >
      {children}
    </Row>
  );
}
