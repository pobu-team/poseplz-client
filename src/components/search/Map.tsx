/* eslint-disable quotes */
import { useState } from 'react';
import {
  Container as MapDiv, Marker, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import useFetchPhotoBooth from '../../hooks/photoBooth/useFetchPhotoBooth';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';
import TagContainer from './TagContainer';
import MarkerItem from './MarkerItem';

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
          {photoBoothQueryResponse?.data.map((photoBoothInfo) => (
            <MarkerItem
              key={photoBoothInfo.photoBoothId}
              tag={tag}
              photoBoothInfo={photoBoothInfo}
              setBoothModal={setBoothModal}
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
