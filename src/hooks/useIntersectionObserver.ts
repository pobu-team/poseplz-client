import {
  createRef, useEffect, useRef, RefObject,
} from 'react';

// eslint-disable-next-line max-len
const useIntersectionObserver = (onIntersecting: () => void): { bottomRef: RefObject<HTMLDivElement> } => {
  const bottomObserver = useRef<IntersectionObserver | null>(null);
  const bottomRef = createRef<HTMLDivElement>();

  useEffect(() => {
    bottomObserver.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersecting();
        }
      },
      { threshold: 0, rootMargin: '100px' },
    );
  }, [onIntersecting]);

  useEffect(() => {
    const observer = bottomObserver.current;
    const el = bottomRef.current;

    if (observer && el) {
      observer.observe(el);
    }

    return () => {
      if (observer && el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return { bottomRef };
};

export default useIntersectionObserver;
