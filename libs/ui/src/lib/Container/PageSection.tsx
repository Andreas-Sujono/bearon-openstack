import React, { forwardRef } from 'react';
import { classes } from '@bearon/utils';
import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Section = forwardRef<any, Props>(function _Section(
  { as: Component = 'div', children, className, ...rest },
  ref
) {
  return (
    <Component
      className={classes(styles.section, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});
