/* eslint-disable quotes */
import { useEffect, useState } from 'react';
import {
  Container as MapDiv, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import useFetchPhotoBooth from '../../hooks/photoBooth/useFetchPhotoBooth';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';
import TagContainer from './TagContainer';
import MarkerItem from './MarkerItem';
import LocationBtn from './LocationButton';

type Coord = {
  latitude: number;
  longitude: number;
}

const Container = styled.div`
  position: relative;
`;

function Map() {
  const [tag, setTag] = useState('');
  const { data: photoBoothQueryResponse } = useFetchPhotoBooth();
  const navermaps = useNavermaps();

  const [myLocation, setMyLocation] = useState<Coord>({ latitude: 37.5540053, longitude: 126.9223894 });
  const [map, setMap] = useState<naver.maps.Map | null>(null);

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

  const onClickLocationBtn = () => {
    if (map) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      map.setZoom(15);
    }
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

  useEffect(() => {
    if (map) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      map.setZoom(15);
    }
  }, [myLocation.latitude]);

  const defaultBoothModal = {
    visible: false, name: '', address: '', brand: undefined,
  };
  const [boothModal, setBoothModal] = useState<BoothDetailModalProps & {visible: boolean}>(defaultBoothModal);

  return (
    <Container>
      <TagContainer tag={tag} setTag={setTag} />
      <MapDiv
        style={{ height: '90vh' }}
        onClick={() => setBoothModal(defaultBoothModal)}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(myLocation.latitude, myLocation.longitude)}
          defaultZoom={15}
          ref={setMap}
        >
          {photoBoothQueryResponse?.data.map((photoBoothInfo) => (
            <MarkerItem
              key={photoBoothInfo.photoBoothId}
              tag={tag}
              photoBoothInfo={photoBoothInfo}
              setBoothModal={setBoothModal}
            />
          ))}
          <LocationBtn onClickLocationBtn={onClickLocationBtn} />
        </NaverMap>
      </MapDiv>
      {boothModal.visible && (
        <BoothDetailModal
          name={boothModal.name}
          address={boothModal.address}
          brand={boothModal.brand}
        />
      )}
    </Container>
  );
}

export default Map;
