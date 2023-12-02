import React from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement>, BearStyleProps {
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
  ...props
}: Props) => {
  const clampedLevel = Math.min(Math.max(level as number, 0), 5);
  const Component = (as ||
    `h${Math.max(clampedLevel, 1)}`) as React.ElementType;

  const [styleProps, rest] = extractStyleProps(props);
  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Component
      className={classes(styles.common, styles.heading, styleClass, className)}
      data-align={align}
      data-weight={weight}
      data-level={clampedLevel}
      {...rest}
    >
      {children}
    </Component>
  );
};
