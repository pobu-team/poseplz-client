import { useEffect, useState } from 'react';
import dragScroll from '../utils/dragScroll';

export default function useDragScroll(ref:React.RefObject<HTMLDivElement>) {
  const [isClick, setIsClick] = useState(false);

  const { dragStart, dragging, dragStop } = dragScroll({ ref, setIsClick });

  useEffect(() => {
    const element = ref.current!;
    element.addEventListener('mousedown', dragStart);
    element.addEventListener('mousemove', dragging);
    element.addEventListener('mouseup', dragStop);
    window.addEventListener('mousemove', dragging);
    window.addEventListener('mouseup', dragStop);

    return () => {
      element.removeEventListener('mousedown', dragStart);
      element.removeEventListener('mousemove', dragging);
      element.removeEventListener('mouseup', dragStop);
      window.removeEventListener('mousemove', dragging);
      window.removeEventListener('mouseup', dragStop);
    };
  }, []);

  return isClick;
}
