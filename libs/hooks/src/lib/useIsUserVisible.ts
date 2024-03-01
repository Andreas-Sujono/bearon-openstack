import { useState, useEffect, useCallback } from 'react';

export function useIsUserVisible() {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = useCallback(() => {
    if (document) {
      setIsVisible(!document.hidden);
    }
  }, []);

  useEffect(() => {
    if (document) {
      document.addEventListener('visibilitychange', handleVisibility);
    }

    return () => {
      if (document) {
        document.removeEventListener('visibilitychange', handleVisibility);
      }
    };
  }, [handleVisibility]);

  return isVisible; // returns boolean
}
