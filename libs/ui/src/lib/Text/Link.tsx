import React, { forwardRef } from 'react';
import { classes } from '@bearon/utils';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';
import styles from './styles.module.scss';

interface LinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    BearStyleProps {
  rel?: string;
  target?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
  href?: string;
  as?: React.ElementType;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = forwardRef<any, LinkProps>(function _Link(
  { href, ...props },
  ref
) {
  return <LinkContent href={href} ref={ref} {...props} />;
});

interface LinkContentProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    BearStyleProps {
  rel?: string;
  target?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
  href?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LinkContent = forwardRef<any, LinkContentProps>(
  function _LinkContent(
    { rel, target, children, secondary, className, href, ...props },
    ref
  ) {
    const isExternal = href?.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);
    const [styleProps, rest] = extractStyleProps(props);

    const styleClass = React.useMemo(() => {
      return createBearStyleClass(styleProps);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...Object.values(styleProps)]);

    return (
      <a
        className={classes(styles.link, className, styleClass)}
        data-secondary={secondary}
        rel={relValue}
        href={href}
        target={targetValue}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
);
