import React, { forwardRef } from 'react';
import { classes, getDefaultClassName } from '../utils';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showOnFocus?: boolean;
  as?: React.ElementType;
  children?: React.ReactElement | string;
  visible?: boolean;
  href?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VisuallyHidden = forwardRef<any, Props>(function _VisuallyHidden(
  {
    className,
    showOnFocus,
    as: Component = 'span',
    children,
    visible,
    ...rest
  },
  ref
) {
  return (
    <StyledDiv
      as={Component}
      className={classes(className, getDefaultClassName('visuallyHidden'))}
      data-hidden={!visible && !showOnFocus}
      data-show-on-focus={showOnFocus}
      ref={ref}
      {...rest}
    >
      {children}
    </StyledDiv>
  );
});

const StyledDiv = styled.div`
  position: absolute;

  &[data-hidden='true'],
  &[data-show-on-focus='true']:not(:focus) {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    word-wrap: normal;
  }
`;

export { VisuallyHidden };
