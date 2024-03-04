import { useState, useLayoutEffect, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { getDefaultClassName } from '../utils';

function createWrapperAndAppendToBody(
  wrapperId = getDefaultClassName('portal')
) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export function Portal({
  children,
  wrapperId = getDefaultClassName('portal'),
}: {
  children: React.ReactNode;
  wrapperId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): ReactPortal | null {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}
