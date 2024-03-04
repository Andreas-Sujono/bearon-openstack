import React, { HTMLAttributes, forwardRef } from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface ColumnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Column = forwardRef<any, ColumnProps>(function _Row(
  {
    as: Component = 'div',
    children,
    className,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    gap,
    ...props
  },
  ref
) {
  const [styleProps, rest] = extractStyleProps(props);
  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justifyContent,
      alignItems: alignItems,
      gap: gap,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps), justifyContent, alignItems, gap]);

  return (
    <Component
      className={classes('bear-column', styleClass, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Column;
