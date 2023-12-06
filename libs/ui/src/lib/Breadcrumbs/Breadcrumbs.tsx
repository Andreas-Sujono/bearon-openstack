import { classes } from '@bearon/utils';
import React, { HTMLAttributes, cloneElement } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import { Link, LinkProps } from '../Text/Link';
import Text, { TextVariant } from '../Text';
import { StyledBreadcrumbs } from './Styles';

export interface BreadcrumbsProps
  extends HTMLAttributes<HTMLDivElement>,
    BearStyleProps {
  gap?: string | number;
  separator?: React.ReactNode | string;
  size?: TextVariant;
}

export function Breadcrumbs({
  className,
  gap,
  children,
  separator = '/',
  size = 'sm',
  ...props
}: BreadcrumbsProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  const finalClones: React.ReactNode[] = [];
  ((children as React.ReactNode[]) || []).forEach((child, index) => {
    if (index !== 0 && !!separator) {
      finalClones.push(
        cloneElement(
          typeof separator === 'string' ? (
            <Text sx={{ margin: '0 4px', opacity: 0.5 }} size={size}>
              {separator}
            </Text>
          ) : (
            (separator as React.ReactElement)
          ),
          {
            key: index + 1000000,
          }
        )
      );
    }

    const lastItem = index === (children as React.ReactNode[]).length - 1;
    finalClones.push(
      cloneElement(child as React.ReactElement, {
        className: 'bear-avatar-item',
        key: index,
        disabled: lastItem,
      })
    );
  });

  return (
    <StyledBreadcrumbs
      className={classes(styleClass, 'bear-breacrumbs', className)}
      $gap={gap}
      $size={size}
      {...rest}
    >
      {finalClones}
    </StyledBreadcrumbs>
  );
}

export interface BreadcrumbsItemProps
  extends HTMLAttributes<HTMLAnchorElement>,
    LinkProps,
    BearStyleProps {
  as?: React.ElementType;
}

export function BreadcrumbsItem({
  className,
  children,
  as: Component = Link,
  disabled,
  ...props
}: BreadcrumbsItemProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Component
      className={classes(styleClass, 'bear-breacrumbs-item', className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
