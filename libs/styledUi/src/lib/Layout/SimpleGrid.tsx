import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  CommonStyleProps,
  InternalCommonStyleProps,
  parseCommonProps,
  parseProps,
  classes,
  getDefaultClassName,
} from '../utils';

export interface SimpleGridProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    CommonStyleProps {
  templateColumns?: string;
  templateRows?: string;
  justifyContent?: string;
  alignItems?: string;
  spacing?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export function SimpleGrid({
  as: Component = 'div',
  children,
  className,
  templateColumns,
  templateRows,
  justifyContent,
  alignItems,
  spacing,
  ...props
}: SimpleGridProps) {
  return (
    <StyledDiv
      className={classes(className, getDefaultClassName('simpleGrid'))}
      as={Component}
      $templateColumns={templateColumns}
      $templateRows={templateRows}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $spacing={spacing}
      {...parseProps(props)}
    >
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<
  {
    $spacing?: string;
    $templateColumns?: string;
    $templateRows?: string;
    $justifyContent?: string;
    $alignItems?: string;
  } & InternalCommonStyleProps
>`
  display: grid;
  gap: ${(props) =>
    props?.$spacing?.startsWith('space')
      ? `var(--${props.$spacing})`
      : props.$spacing || 0};
  grid-template-columns: ${(props) => props.$templateColumns};
  grid-template-rows: ${(props) => props.$templateRows};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  ${(props) => parseCommonProps(props)}
`;
