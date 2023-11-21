import React, { useCallback } from 'react';
import { useEffect, useRef } from 'react';

export interface UseOutsideClickProps {
  /**
   * Whether the hook is enabled
   */
  enabled?: boolean;
  /**
   * The reference to a DOM element.
   */
  ref: React.RefObject<HTMLElement>;
  /**
   * Function invoked when a click is triggered outside the referenced element.
   */
  handler?: (e: Event) => void;
}

export function useOutsideClick(props: UseOutsideClickProps) {
  const { ref, handler, enabled = true } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savedHandler = useCallback(handler as (e: unknown) => void, []);

  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  });

  const state = stateRef.current;

  useEffect(() => {
    if (!enabled) return;
    const onPointerDown = (e: MouseEvent | MouseEvent) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };

    const onMouseUp = (event: MouseEvent) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }

      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const doc = getOwnerDocument(ref.current);
    doc.addEventListener('mousedown', onPointerDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
    doc.addEventListener('touchstart', onPointerDown as () => void, true);
    doc.addEventListener('touchend', onTouchEnd, true);

    return () => {
      doc.removeEventListener('mousedown', onPointerDown, true);
      doc.removeEventListener('mouseup', onMouseUp, true);
      doc.removeEventListener('touchstart', onPointerDown as () => void, true);
      doc.removeEventListener('touchend', onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}

function isValidEvent(event: Event, ref: React.RefObject<HTMLElement>) {
  const target = event.target as HTMLElement;

  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target)) return false;
  }

  return !ref.current?.contains(target);
}

function getOwnerDocument(node?: Element | null): Document {
  return node?.ownerDocument ?? document;
}
