import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  templateColumns?: string;
  templateRows?: string;
  justifyContent?: string;
  alignItems?: string;
  spacing?: string;
  children?: React.ReactNode;
}

export default function SimpleGrid({
  children,
  className,
  templateColumns,
  templateRows,
  justifyContent,
  alignItems,
  spacing,
  ...props
}: Props) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps, {
      display: 'grid',
      gap: spacing?.startsWith('space') ? `var(--${spacing})` : spacing || 0,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      justifyContent,
      alignItems,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...Object.values(styleProps),
    spacing,
    templateColumns,
    templateRows,
    justifyContent,
    alignItems,
  ]);

  return (
    <div
      className={classes('bear-simple-grid', styleClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
