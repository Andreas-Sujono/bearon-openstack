import { classes } from '@bearon/utils';
import React, { HTMLAttributes } from 'react';
import {
  BearStyleProps,
  createBearStyleClass,
  extractStyleProps,
  parseBackgroundColorCss,
} from '../utils/styles';
import { Button } from '../Button';
import { StyledTabsHover } from './Styles';

export interface TabsHoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
    BearStyleProps {
  items: {
    label: string;
    value: string | number;
    // href?: string;
    id?: string;
  }[];
  value?: string | number;
  onClick?: (tabValue: string | number) => void;
  ariaLabelledBy?: string;
  spacing?: string | number;
}

export function TabsHover({
  className,
  items,
  ariaLabelledBy,
  value,
  background = 'primary',
  backgroundOpacity = 0.5,
  spacing,
  onClick,
  ...props
}: TabsHoverProps) {
  const [styleProps, rest] = extractStyleProps(props);

  const styleClass = React.useMemo(() => {
    styleProps.background = undefined;
    return createBearStyleClass(
      styleProps,
      {},
      {
        '--tabs-bg': parseBackgroundColorCss(background),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.values(styleProps)]);

  return (
    <StyledTabsHover
      className={classes('bear-tabs', className, styleClass)}
      $spacing={spacing}
      {...rest}
    >
      <ul aria-labelledby={ariaLabelledBy} className="bear-tabs-ul">
        {items.map((item) => (
          <li key={item.value} data-active={item.value === value}>
            <Button
              id={item.id}
              variant={'text'}
              backgroundOpacity={backgroundOpacity}
              textColor={item.value === value ? undefined : background}
              background={background}
              style={{
                borderRadius: '0.5rem 0.5rem 0 0',
              }}
              onClick={() => onClick && onClick(item.value)}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </StyledTabsHover>
  );
}
