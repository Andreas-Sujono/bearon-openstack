import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  CommonStyleProps,
  InternalCommonStyleProps,
  getDefaultClassName,
  parseCommonProps,
  parseProps,
  classes,
} from '../utils';

export interface BoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  children?: React.ReactNode;
  as?: React.ElementType;
}

export function Box({
  children,
  className,
  as: Component = 'div',
  ...props
}: BoxProps) {
  return (
    <StyledDiv
      as={Component}
      className={classes(className, getDefaultClassName('box'))}
      {...parseProps(props)}
    >
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<InternalCommonStyleProps>`
  ${(props) => parseCommonProps(props)}
`;
