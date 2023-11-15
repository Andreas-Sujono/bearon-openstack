import React, { HTMLAttributes } from 'react';
import { classes } from '@bearon/utils';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | string[] | string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  as?: React.ElementType;
  align?: string;
  weight?: string;
  secondary?: boolean;
  className?: string;
}

export const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  ...rest
}: Props) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};
