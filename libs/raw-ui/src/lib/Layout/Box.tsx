import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface BoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  children?: React.ReactNode;
  as?: React.ElementType;
}

export default function Box({
  children,
  className,
  as: Component = 'div',
  ...props
}: BoxProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Component className={classes(styleClass, 'bear-box', className)} {...rest}>
      {children}
    </Component>
  );
}
