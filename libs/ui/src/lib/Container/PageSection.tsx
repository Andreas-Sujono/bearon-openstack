import React, { forwardRef } from 'react';
import { bearCss, classes } from '@bearon/utils';
import { mediaScreen } from '../ThemeProvider/theme';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const pageSectionStyleClass = (props: Props) => bearCss`
  padding-right: var(--spaceS);
  padding-left: var(--spaceS);
  padding-top: var(--space4XL);
  padding-bottom: var(--space4XL);

  &:focus {
    outline: none;
  }

  ${mediaScreen.minLaptop}{
    padding-top: var(--space3XL);
    padding-bottom: var(--space3XL);
  }

  ${mediaScreen.minTablet}{
    padding-top: var(--space2XL);
    padding-bottom: var(--space2XL);
  }

  ${mediaScreen.maxMobileS}{
    padding-top: var(--spaceL);
    padding-bottom: var(--spaceL);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Section = forwardRef<any, Props>(function _Section(
  { as: Component = 'div', children, className, ...rest },
  ref
) {
  return (
    <Component
      className={classes(
        'bear-page-section',
        pageSectionStyleClass(rest),
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});
