import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import {
  CommonStyleProps,
  InternalCommonStyleProps,
  parseCommonProps,
  parseProps,
  getDefaultClassName,
  classes,
} from '../utils';

export interface ColumnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
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
  return (
    <StyledDiv
      className={classes(className, getDefaultClassName('column'))}
      ref={ref}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      as={Component}
      {...parseProps(props)}
    >
      {children}
    </StyledDiv>
  );
});

export { Column };

const StyledDiv = styled.div<
  {
    spacing?: string;
    $gap?: string;
    $justifyContent?: string;
    $alignItems?: string;
  } & InternalCommonStyleProps
>`
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props?.$gap?.startsWith('space')
      ? `var(--${props.$gap})`
      : props.$gap || 0};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  ${(props) => parseCommonProps(props)}
`;
