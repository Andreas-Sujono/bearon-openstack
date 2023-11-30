import React, { forwardRef } from 'react';
import { classes } from '@bearon/utils';
import styles from './styles.module.scss';

interface Props {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Row = forwardRef<any, Props>(function _Row(
  { as: Component = 'div', children, className, ...rest },
  ref
) {
  return (
    <Component
      className={classes('bear-row', styles.row, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});