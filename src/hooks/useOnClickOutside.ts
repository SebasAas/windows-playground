import { RefObject, useEffect } from 'react';
// Store
import { useDispatch } from 'react-redux';

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: { payload: undefined; type: string },
  target: string
) {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (event: any) => {
      if (event.target.nodeName === target) {
        dispatch(handler);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler]);
}
