import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
export default function useTracking() {
  const location = useLocation();

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [location]);
}
