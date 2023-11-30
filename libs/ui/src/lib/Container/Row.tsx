import React, { forwardRef } from 'react';
import { bearCss, classes } from '@bearon/utils';

interface Props {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

const rowStyleClass = (props: Props) => bearCss`
  display: flex;
  justify-content: ${props.justifyContent || 'initial'};
  align-items: ${props.alignItems || 'center'};
  gap: ${props.gap || '0'};
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Row = forwardRef<any, Props>(function _Row(
  { as: Component = 'div', children, className, ...rest },
  ref
) {
  return (
    <Component
      className={classes('bear-row', rowStyleClass(rest), className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});
