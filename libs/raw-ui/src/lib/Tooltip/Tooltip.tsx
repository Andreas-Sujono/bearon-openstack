import { classes } from '@bearon/utils';
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { stylePopperClass } from './styles';

export interface TooltipProps {
  text?: string;
  element?: React.ReactElement;
  children: React.ReactNode;
}
const Tooltip = ({ text, element, children }: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<null | HTMLElement>(
    null
  );
  const [popperElement, setPopperElement] = useState<null | HTMLElement>(null);
  const [arrowElement, setArrowElement] = useState<null | HTMLElement>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    }
  );

  useEffect(() => {
    const mouseEnter = referenceElement?.addEventListener('mouseenter', () => {
      popperElement?.setAttribute('data-show', 'true');
      if (update) update();
    });
    const mouseLeave = referenceElement?.addEventListener('mouseleave', () => {
      popperElement?.removeAttribute('data-show');
    });

    return () => {
      mouseEnter &&
        referenceElement?.removeEventListener('mouseenter', mouseEnter);
      mouseLeave &&
        referenceElement?.removeEventListener('mouseleave', mouseLeave);
    };
  }, [referenceElement, update, popperElement]);

  return (
    <>
      <div ref={setReferenceElement}>{children}</div>

      <div
        ref={setPopperElement}
        className={classes(stylePopperClass)}
        {...attributes.popper}
      >
        {text || element}
        <div ref={setArrowElement} style={styles.arrow} className="ntv-arrow" />
      </div>
    </>
  );
};

export { Tooltip };
