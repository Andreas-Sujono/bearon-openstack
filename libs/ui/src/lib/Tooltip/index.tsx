import { bearCss } from '@bearon/utils';
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

const StyledPopper = bearCss`
  background: #575656;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  display: none;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  &[data-show] {
    display: block;
    opacity: 1;
  }

  .ntv-arrow,
  .ntv-arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  .ntv-arrow {
    visibility: hidden;
  }

  .ntv-arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  &[data-popper-placement^='top'] > .ntv-arrow {
    bottom: -4px;
  }

  &[data-popper-placement^='bottom'] > .ntv-arrow {
    top: -4px;
  }

  &[data-popper-placement^='left'] > .ntv-arrow {
    right: -4px;
  }

  &[data-popper-placement^='right'] > .ntv-arrow {
    left: -4px;
  }
`;

interface Props {
  text?: string;
  element?: React.ReactElement;
  children: React.ReactNode;
}
const Tooltip = ({ text, element, children }: Props) => {
  const [referenceElement, setReferenceElement] = useState<null | HTMLElement>(
    null
  );
  const [popperElement, setPopperElement] = useState<null | HTMLElement>(null);
  const [arrowElement, setArrowElement] = useState<null | HTMLElement>(null);
  const { styles, attributes, update, forceUpdate } = usePopper(
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

      <StyledPopper
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {text || element}
        <div ref={setArrowElement} style={styles.arrow} className="ntv-arrow" />
      </StyledPopper>
    </>
  );
};

export default Tooltip;
