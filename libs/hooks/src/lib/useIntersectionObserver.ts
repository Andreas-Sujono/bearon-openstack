import React from 'react';

//https://github.com/thebuilder/react-intersection-observer/blob/main/src/observe.ts
export function useIntersectionObserver(
  options = {} as {
    threshold?: number;
    root?: HTMLElement;
    rootMargin?: string;
  }
) {
  const { threshold = 1, root = null, rootMargin = '0px' } = options;
  const [entry, setEntry] = React.useState<null | IntersectionObserverEntry>(
    null
  );

  const previousObserver = React.useRef<IntersectionObserver | null>(null);

  const customRef = React.useCallback(
    (node: HTMLElement) => {
      if (previousObserver.current) {
        previousObserver.current.disconnect();
        previousObserver.current = null;
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setEntry(entry);
          },
          { threshold, root, rootMargin }
        );

        observer.observe(node);
        previousObserver.current = observer;
      }
    },
    [threshold, root, rootMargin]
  );

  return [customRef, entry];
}
