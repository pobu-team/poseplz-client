/* eslint-disable quotes */
import { useEffect, useState } from 'react';
import {
  Container as MapDiv, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';
import TagContainer from './TagContainer';
import MarkerItem from './MarkerItem';
import LocationBtn from './LocationButton';
import useGetMyLocation from '../../hooks/useGetMyLocation';
import photoBoothService from '../../service/PhotoBoothService';
import { PhotoBoothResponse } from '../../types/PhotoBooth';

const Container = styled.div`
  position: relative;
`;

function Map() {
  const [tag, setTag] = useState('');
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothResponse['data']>([]);

  const navermaps = useNavermaps();
  const { myLocation } = useGetMyLocation();

  const onClickMyLocationBtn = () => {
    if (map && myLocation.latitude && myLocation.longitude) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      map.setZoom(15);
    }
  };

  const loadData = async () => {
    const fetchParams = {
      latitude: myLocation.latitude,
      longitude: myLocation.longitude,
      size: 500,
      distance: 5000,
    };
    const { data } = await photoBoothService.fetchPhotoBooths({ params: fetchParams });
    setPhotoBoothData(data);
  };

  useEffect(() => {
    if (map && myLocation.latitude && myLocation.longitude) {
      map.setCenter(new navermaps.LatLng(myLocation.latitude, myLocation.longitude));
      map.setZoom(15);
      loadData();
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
        {/* 내 위치 불러오기 전까지 로딩화면 보여줌 */}
        {!myLocation.latitude && (
          <div style={{
            width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <img width="130px" height="130px" src="/images/loading.gif" alt="loading" />
          </div>
        )}
        {myLocation.latitude && myLocation.longitude && (
          <NaverMap
            defaultCenter={new navermaps.LatLng(myLocation.latitude, myLocation.longitude)}
            defaultZoom={15}
            ref={setMap}
          >
            {photoBoothData?.map((photoBoothInfo) => (
              <MarkerItem
                key={photoBoothInfo.photoBoothId}
                tag={tag}
                photoBoothInfo={photoBoothInfo}
                setBoothModal={setBoothModal}
                clicked={boothModal.address === photoBoothInfo.address}
              />
            ))}
            <LocationBtn onClickMyLocationBtn={onClickMyLocationBtn} />
          </NaverMap>
        )}
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
