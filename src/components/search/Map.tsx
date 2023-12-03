import { useState } from 'react';
import {
  Container as MapDiv, Marker, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import useFetchPhotoBooth from '../../hooks/useFetchPhotoBooth';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';

const Container = styled.div`
  position: relative;
`;

function Map() {
  const { data: photoBoothQueryResponse } = useFetchPhotoBooth();
  const navermaps = useNavermaps();

  const [boothModal, setBoothModal] = useState<BoothDetailModalProps & {visible: boolean}>({
    visible: false, name: '', address: '', brand: undefined,
  });

  // eslint-disable-next-line max-len
  const handleClickPin = (e: naver.maps.PointerEvent, { name, address, brand }: BoothDetailModalProps) => {
    e.pointerEvent.stopPropagation();
    setBoothModal((prev) => ({
      ...prev, visible: true, name, address, brand,
    }));
  };

  return (
    <Container>
      <MapDiv
        style={{
          width: '100%',
          height: '90vh',
        }}
        onClick={() => setBoothModal((prev) => ({
          ...prev, visible: false, name: '', address: '', imageUrl: '',
        }))}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.5540053, 126.9223894)}
          defaultZoom={15}
        >
          {photoBoothQueryResponse?.data.map(({
            name, address, brand, coordinates, photoBoothId,
          }) => (
            <Marker
              key={photoBoothId}
              position={new navermaps.LatLng(coordinates.latitude, coordinates.longitude)}
              icon={`/images/${brand.name}.svg`}
              onClick={(e) => handleClickPin(e, { name, address, brand })}
            />

          ))}
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
