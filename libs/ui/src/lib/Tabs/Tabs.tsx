import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { StyledTabs } from './Styles';
import {
  CommonStyleProps,
  classes,
  getDefaultClassName,
  parseProps,
} from '../utils';

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'>,
    CommonStyleProps {
  items: {
    label: string;
    value: string | number;
    href?: string;
    id?: string;
  }[];
  value?: string | number;
  onClick?: (tabValue: string | number) => void;
  ariaLabelledBy?: string;
  spacing?: string | number;
  variant?: 'background' | 'underline';
}

//TODO: handle accessibility such as tabIndex, and move tab using keyboard
export function Tabs({
  className,
  items,
  ariaLabelledBy,
  value,
  background = 'primary',
  backgroundOpacity = 0.5,
  spacing,
  onClick,
  variant = 'background',
  ...props
}: TabsProps) {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const parsedProps = parseProps(props);

  //calculate underline position
  useEffect(() => {
    moveUnderline(value as string);
  }, []);

  const onTabItemClick = (_value: string | number) => {
    if (variant !== 'underline') {
      if (onClick && value !== _value) onClick(_value);
      return;
    }

    if (value === _value) return;
    moveUnderline(_value);
  };
  const moveUnderline = (_value: string | number) => {
    const currentActiveTab = containerRef.current?.querySelector(
      `li[data-active='true']`
    ) as HTMLElement;
    const nextActiveTab = containerRef.current?.querySelector(
      `li[data-value='${_value}'`
    ) as HTMLElement;
    if (!currentActiveTab || !nextActiveTab || !containerRef.current) return;

    const newTabPosition =
      currentActiveTab.compareDocumentPosition(nextActiveTab);

    const newTabWidth =
      nextActiveTab.offsetWidth / containerRef.current.offsetWidth;
    let transitionWidth;

    // if the new tab is to the right
    if (newTabPosition === 4) {
      transitionWidth =
        nextActiveTab.offsetLeft +
        nextActiveTab.offsetWidth -
        currentActiveTab.offsetLeft;
    } else {
      // if the tab is to the left
      transitionWidth =
        currentActiveTab.offsetLeft +
        currentActiveTab.offsetWidth -
        nextActiveTab.offsetLeft;
      containerRef.current.style.setProperty(
        '--_left',
        nextActiveTab.offsetLeft + 'px'
      );
    }

    containerRef.current.style.setProperty(
      '--_width',
      String(transitionWidth / containerRef.current.offsetWidth)
    );
    if (onClick) onClick(_value);

    setTimeout(() => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty(
        '--_left',
        nextActiveTab.offsetLeft + 'px'
      );
      containerRef.current.style.setProperty(
        '--_width',
        newTabWidth.toString()
      );
    }, 220);
  };
  //end: calculate underline position

  return (
    <div>
      <StyledTabs
        className={classes(getDefaultClassName('tabs'), className)}
        $spacing={spacing}
        $variant={variant}
        $background={background}
        {...parsedProps}
      >
        <ul
          aria-labelledby={ariaLabelledBy}
          className={getDefaultClassName('tabs-ul')}
          ref={containerRef}
        >
          {items.map((item) => (
            <li
              key={item.value}
              data-active={String(item.value) === String(value)}
              data-value={item.value}
            >
              <Button
                id={item.id}
                variant={
                  String(item.value) === String(value) &&
                  variant === 'background'
                    ? 'contained'
                    : 'text'
                }
                backgroundOpacity={backgroundOpacity}
                textColor={
                  String(item.value) === String(value) ? undefined : background
                }
                background={background}
                style={{
                  borderRadius: '0.5rem 0.5rem 0 0',
                }}
                onClick={() => onTabItemClick(item.value)}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </StyledTabs>
      <Divider background={'grey'} backgroundOpacity={0} />
    </div>
  );
}
