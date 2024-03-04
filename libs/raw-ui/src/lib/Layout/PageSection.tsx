import React, { HTMLAttributes, forwardRef } from 'react';
import { bearCss, classes } from '@bearon/utils';
import { mediaScreen } from '../ThemeProvider/theme';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
} from '../utils/styles';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BearStyleProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const pageSectionStyleClass = (props: Props) => bearCss`
  padding-right: var(--spaceMd);
  padding-left: var(--spaceMd);
  padding-top: var(--space4Xl);
  padding-bottom: var(--space4Xl);
  margin-left: auto;
  margin-right: auto;
  &:focus {
    outline: none;
  }

  ${mediaScreen.minLaptop}{
    padding-top: var(--space3Xl);
    padding-bottom: var(--space3Xl);
  }

  ${mediaScreen.minTablet}{
    padding-top: var(--space2Xl);
    padding-bottom: var(--space2Xl);
  }

  ${mediaScreen.maxMobileS}{
    padding-top: var(--spaceLg);
    padding-bottom: var(--spaceLg);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageSection = forwardRef<any, Props>(function _Section(
  { as: Component = 'div', children, className, ...props },
  ref
) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    return createBearStyleClass(styleProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <Component
      className={classes(
        'bear-page-section',
        styleClass,
        pageSectionStyleClass(props),
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default PageSection;
