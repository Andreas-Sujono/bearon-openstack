import React, { forwardRef } from 'react';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../../utils';
import { StyledLink } from '../styles';

export interface LinkProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'color'>,
    CommonStyleProps {
  rel?: string;
  target?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
  href?: string;
  as?: React.ElementType;
  disabled?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = forwardRef<any, LinkProps>(function _Link(
  { href, ...props },
  ref
) {
  return <LinkContent href={href} ref={ref} {...parseProps(props)} />;
});

interface LinkContentProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'color'>,
    CommonStyleProps {
  rel?: string;
  target?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
  href?: string;
  as?: React.ElementType;
  disabled?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LinkContent = forwardRef<any, LinkContentProps>(
  function _LinkContent(
    {
      rel,
      target,
      children,
      secondary,
      className,
      href,
      as: Component = 'a',
      disabled,
      ...props
    },
    ref
  ) {
    const isExternal = href?.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);

    return (
      <StyledLink
        className={classes(className, getDefaultClassName('link'))}
        data-secondary={secondary}
        rel={relValue}
        href={href}
        target={targetValue}
        ref={ref}
        $disabled={disabled}
        {...parseProps(props)}
      >
        {children}
      </StyledLink>
    );
  }
);
