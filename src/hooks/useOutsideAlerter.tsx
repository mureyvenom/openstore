import { RefObject, useEffect } from 'react';

const useOutsideAlerter = (ref: RefObject<HTMLDivElement>, cb: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && event.target === ref.current) {
        cb();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb]);
};

export default useOutsideAlerter;
