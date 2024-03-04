import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import Transition from '../Animation/Transition';
import { StyledPopper, StyledPopperContainer } from './styles';
import { getDefaultClassName } from '../utils';
import { Placement } from '@popperjs/core';

export interface TooltipProps {
  text?: string;
  element?: React.ReactElement;
  children: React.ReactNode;
  bg?: string;
  textColor?: string;
  containerStyle?: React.CSSProperties;
  popperStyle?: React.CSSProperties;
  position?: 'top' | 'bottom' | 'left' | 'right';
  show?: boolean;
}
const Tooltip = ({
  text,
  element,
  children,
  bg,
  textColor,
  containerStyle,
  popperStyle,
  position = 'bottom',
  show: forceShow = false,
}: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<null | HTMLElement>(
    null
  );
  const [popperElement, setPopperElement] = useState<null | HTMLElement>(null);
  const [arrowElement, setArrowElement] = useState<null | HTMLElement>(null);
  const [showed, setIsShowed] = useState(false);

  let popperPlacement = 'bottom' as Placement;
  if (position === 'top') popperPlacement = 'top';
  if (position === 'left') popperPlacement = 'left';
  if (position === 'right') popperPlacement = 'right';

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: popperPlacement,
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
      ],
    }
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const mouseEnter = referenceElement?.addEventListener('mouseenter', () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      setIsShowed(true);
      popperElement?.setAttribute('data-show', 'true');
      if (update) update();
    });
    const mouseLeave = referenceElement?.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        setIsShowed(false);
        popperElement?.removeAttribute('data-show');
      }, 10);
    });

    return () => {
      mouseEnter &&
        referenceElement?.removeEventListener('mouseenter', mouseEnter);
      mouseLeave &&
        referenceElement?.removeEventListener('mouseleave', mouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referenceElement, update]);

  popperStyle = {
    ...(popperStyle || {}),
    maxWidth: '300px',
  };

  if (!text && !element) {
    return (
      <div style={{ width: 'max-content', ...(containerStyle || {}) }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={setReferenceElement}
      style={{ width: 'max-content', ...(containerStyle || {}) }}
      className={getDefaultClassName('tooltip-container')}
    >
      {children}
      <Transition
        in={showed || forceShow}
        timeout={{ enter: 200, exit: 100 }}
        unmount
      >
        {(visible, status) => (
          <StyledPopperContainer
            data-popper-placement={position}
            data-visible={visible}
            ref={setPopperElement}
            style={{ ...styles.popper }}
            data-status={status}
            className={getDefaultClassName('tooltip-popperContainer')}
          >
            <StyledPopper
              style={{ ...(popperStyle || {}) }}
              $bg={bg}
              $textColor={textColor}
              data-status={status}
              data-popper-placement={position}
              className={getDefaultClassName('tooltip-popper')}
              {...attributes.popper}
            >
              {element || text}
              <div
                ref={setArrowElement}
                style={styles.arrow}
                data-popper-arrow
                className={getDefaultClassName('tooltip-arrow')}
              />
            </StyledPopper>
          </StyledPopperContainer>
        )}
      </Transition>
    </div>
  );
};

export { Tooltip };
