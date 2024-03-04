import React, { HTMLAttributes } from 'react';
import { Button } from '../Button';
import { StyledTabsHover } from './Styles';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';

export interface TabsHoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'>,
    CommonStyleProps {
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
  const parsedProps = parseProps(props);

  return (
    <StyledTabsHover
      className={classes(getDefaultClassName('tabs'), className)}
      $spacing={spacing}
      $background={background}
      {...parsedProps}
    >
      <ul
        aria-labelledby={ariaLabelledBy}
        className={getDefaultClassName('tabs-ul')}
      >
        {items.map((item) => (
          <li key={item.value} data-active={item.value === value}>
            <Button
              id={item.id}
              variant={'text'}
              backgroundOpacity={backgroundOpacity}
              textColor={item.value === value ? background : 'textLight'}
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
