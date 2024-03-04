import React, { HTMLAttributes, forwardRef } from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface RowProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  wrap?: boolean;
  justifyContent?: string;
  alignItems?: string;
  gap?: string | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Row = forwardRef<any, RowProps>(function _Row(
  {
    as: Component = 'div',
    children,
    className,
    justifyContent = 'flex-start',
    alignItems = 'center',
    wrap = false,
    gap,
    ...props
  },
  ref
) {
  const [styleProps, rest] = extractStyleProps(props);
  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps, {
      display: 'flex',
      justifyContent: justifyContent,
      alignItems: alignItems,
      gap: gap,
      flexWrap: wrap ? 'wrap' : 'nowrap',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps), justifyContent, alignItems, gap, wrap]);

  return (
    <Component
      className={classes('bear-row', styleClass, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Row;
