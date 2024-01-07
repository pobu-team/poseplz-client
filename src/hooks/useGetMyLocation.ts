import { useEffect, useState } from 'react';

type Coord = {
  latitude: number | null;
  longitude: number | null;
}

const useGetMyLocation = () => {
  const [myLocation, setMyLocation] = useState<Coord>({ latitude: null, longitude: null });

  const success = (position: GeolocationPosition) => {
    setMyLocation((prev) => ({
      ...prev,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }));
  };

  const error = () => {
    console.warn('사용자 위치 불러오기 실패');
    setMyLocation({ latitude: 37.5540053, longitude: 126.9223894 });
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
