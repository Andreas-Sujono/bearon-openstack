import React, { HTMLAttributes } from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import styles from './styles.module.scss';

export type TextVariant =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  children?: React.ReactElement | string[] | string | React.ReactNode;
  size?: TextVariant;
  as?: React.ElementType;
  align?: 'auto' | 'start' | 'center';
  weight?: 'auto' | 'regular' | 'medium' | 'bold';
  secondary?: boolean;
  className?: string;
  display?: 'block' | 'inline' | 'inline-block';
}

const Text = ({
  children,
  size,
  as: Component = 'span',
  align,
  weight,
  secondary,
  className,
  display,
  ...props
}: Props) => {
  const [styleProps, rest] = extractStyleProps(props);
  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps, { display });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps), display]);
  return (
    <Component
      className={classes(styles.common, styles.text, styleClass, className)}
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

export default Text;

export * from './Heading';
export { Text };
