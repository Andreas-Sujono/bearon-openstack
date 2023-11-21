import React from 'react';
import { classes } from '@bearon/utils';
import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactElement[] | string;
  level?: number | string;
  as?: React.ElementType;
  align?: string;
  weight?: string;
  className?: string;
}

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}: Props) => {
  const clampedLevel = Math.min(Math.max(level as number, 0), 5);
  const Component = (as ||
    `h${Math.max(clampedLevel, 1)}`) as React.ElementType;

  return (
    <Component
      className={classes(styles.common, styles.heading, className)}
      data-align={align}
      data-weight={weight}
      data-level={clampedLevel}
      {...rest}
    >
      {children}
    </Component>
  );
};
