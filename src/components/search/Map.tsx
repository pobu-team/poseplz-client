/* eslint-disable quotes */
import { useState } from 'react';
import {
  Container as MapDiv, Marker, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import useFetchPhotoBooth from '../../hooks/photoBooth/useFetchPhotoBooth';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';
import TagContainer from './TagContainer';

const Container = styled.div`
  position: relative;
`;

function Map() {
  const [tag, setTag] = useState('');
  const { data: photoBoothQueryResponse } = useFetchPhotoBooth();

  const navermaps = useNavermaps();

  const defaultBoothModal = {
    visible: false, name: '', address: '', brand: undefined,
  };

  const [boothModal, setBoothModal] = useState<BoothDetailModalProps & {visible: boolean}>(defaultBoothModal);

  const handleClickPin = (e: naver.maps.PointerEvent, { name, address, brand }: BoothDetailModalProps) => {
    e.pointerEvent.stopPropagation();
    setBoothModal((prev) => ({
      ...prev, visible: true, name, address, brand,
    }));
  };

  return (
    <Container>
      <TagContainer tag={tag} setTag={setTag} />
      <MapDiv
        style={{ height: '90vh' }}
        onClick={() => setBoothModal(defaultBoothModal)}
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
              visible={tag === '' || brand.name === tag}
              position={new navermaps.LatLng(coordinates.latitude, coordinates.longitude)}
              icon={{
                content: [
                  `<div style="zIndex: 2; width: 38px; height: 46px; position: relative;">`,
                  `<img src="/images/base_marker_icon.svg" alt="marker" style="position: absolute; left: 50%; translate: -50%; width: 50px; height: 50px;" />`,
                  `<img src=${brand.logoUrl ? brand.logoUrl : '/images/default_brand_logo.svg'} alt="${brand.name ? brand.name : '기본이미지'}" style="position: absolute; width: 30px; height: 30px; border-radius: 30px; top: 5px; left: 50%; translate: -50%;" />`,
                  `</div>`,
                ].join(''),
                scaledSize: { width: 30, height: 30 },
                anchor: new naver.maps.Point(50, 50),
              }}
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
