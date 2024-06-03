import { useEffect, useState } from 'react';

type Coord = {
  latitude: number;
  longitude: number;
}

/** 내 위치 기본값은 사진관이 비교적 많은 연남동으로 지정했습니다 */
const DEFAULT_LATITUDE = 37.5540053;
const DEFAULT_LONGITUDE = 126.9223894;

const useGetMyLocation = () => {
  const [myLocation, setMyLocation] = useState<Coord>({ latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE });

  const success = (position: GeolocationPosition) => {
    setMyLocation((prev) => ({
      ...prev,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }));
  };

  const error = () => {
    console.warn('사용자 위치 불러오기 실패');
    setMyLocation({ latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 1000 * 10,
        maximumAge: 1000 * 3600 * 24,
      });
    }
  }, []);

  return {
    myLocation,
  };
};

export default useGetMyLocation;
