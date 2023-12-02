import { classes } from '@bearon/utils';
import React from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>, BearStyleProps {
  children?: React.ReactNode;
}

export default function Box({ children, className, ...props }: Props) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <div className={classes(styleClass, 'bear-box', className)} {...rest}>
      {children}
    </div>
  );
}
