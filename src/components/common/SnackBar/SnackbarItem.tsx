import {
  AnimationEvent, useEffect, useRef, useState,
} from 'react';
import { Snackbar } from './useSnackbar';

function SnackbarItem({
  status, setStatus, children, onMouseEnter, onMouseLeave,
}: Snackbar) {
  const elemRef = useRef<HTMLDivElement>(null);
  const [animationClassName, setAnimationClassName] = useState<string>();

  const handleAnimationEnd = (e: AnimationEvent) => {
    if (elemRef.current?.className.includes('enter')) setAnimationClassName('show');
    else {
      setStatus(null);
    }
  };

  useEffect(() => {
    setAnimationClassName(status === 'open' ? 'enter' : 'exit');
  }, [status]);

  return (
    <div
      ref={elemRef}
      className={animationClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}

export default SnackbarItem;
