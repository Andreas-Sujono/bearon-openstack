import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import {
  CommonStyleProps,
  InternalCommonStyleProps,
  parseCommonProps,
  parseProps,
  classes,
  getDefaultClassName,
} from '../utils';

export interface RowProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
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
  return (
    <StyledDiv
      className={classes(className, getDefaultClassName('Row'))}
      ref={ref}
      as={Component}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $wrap={wrap}
      $gap={gap}
      {...parseProps(props)}
    >
      {children}
    </StyledDiv>
  );
});

export { Row };

const StyledDiv = styled.div<
  {
    spacing?: string;
    $gap?: string;
    $wrap?: boolean;
    $justifyContent?: string;
    $alignItems?: string;
  } & InternalCommonStyleProps
>`
  display: flex;
  gap: ${(props) =>
    props?.$gap?.startsWith('space')
      ? `var(--${props.$gap})`
      : props.$gap || 0};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-wrap: ${(props) => (props.$wrap ? 'wrap' : 'nowrap')};
  ${(props) => parseCommonProps(props)}
`;
