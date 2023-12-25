/* eslint-disable quotes */
import { useRef, useState } from 'react';
import {
  Container as MapDiv, Marker, NaverMap, useNavermaps,
} from 'react-naver-maps';
import styled from 'styled-components';
import useFetchPhotoBooth from '../../hooks/photoBooth/useFetchPhotoBooth';
import BoothDetailModal, { BoothDetailModalProps } from './BoothDetailModal';
import useFetchBrands from '../../hooks/photoBooth/useFetchBrands';
import useDragScroll from '../../hooks/useDragScroll';

const Container = styled.div`
  position: relative;
`;

const BrandTagsContainer = styled.div`
  display: flex;
  padding: 16px;
  max-width: 1000px;
  align-items: center;
  gap: 10px;
  z-index: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
  overflow-x: scroll;
  cursor: grab;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagButton = styled.button<{active: boolean}>`
  width: max-content;
  height: 36px;
  border-radius: 30px;
  padding: 5px 10px;
  border: 2px solid ${({ active, theme: { colors } }) => (active ? colors.primary : colors.lineNormal)};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  color: ${({ theme: { colors } }) => colors.message};
`;

function Map() {
  const { data: photoBoothQueryResponse } = useFetchPhotoBooth();
  const { data: brandsQueryResponse } = useFetchBrands();
  const navermaps = useNavermaps();

  const [boothModal, setBoothModal] = useState<BoothDetailModalProps & {visible: boolean}>({
    visible: false, name: '', address: '', brand: undefined,
  });
  const [tag, setTag] = useState('');

  // eslint-disable-next-line max-len
  const handleClickPin = (e: naver.maps.PointerEvent, { name, address, brand }: BoothDetailModalProps) => {
    e.pointerEvent.stopPropagation();
    setBoothModal((prev) => ({
      ...prev, visible: true, name, address, brand,
    }));
  };

  const brandContainerRef = useRef<HTMLDivElement>(null);

  const isClick = useDragScroll(brandContainerRef);

  const handleClickBrandTag = (brandName: string) => () => {
    if (!isClick) {
      return;
    }
    if (tag === brandName) {
      setTag('');
      return;
    }
    setTag(brandName);
  };

  return (
    <Container>
      <BrandTagsContainer ref={brandContainerRef}>
        {brandsQueryResponse?.map((brand) => (
          <TagContainer key={brand.brandId}>
            <TagButton
              active={brand.name === tag}
              onClick={handleClickBrandTag(brand.name)}
            >
              {brand.name}
            </TagButton>
          </TagContainer>
        ))}
      </BrandTagsContainer>
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
              visible={tag === '' || brand.name === tag}
              position={new navermaps.LatLng(coordinates.latitude, coordinates.longitude)}
              icon={{
                content: [
                  `<div style="zIndex: 2; width: 38px; height: 46px; position: relative;">`,
                  `<img src="/images/base_marker_icon.svg" alt="marker" style="position: absolute; left: 50%; translate: -50%; width: 50px; height: 50px;" />`,
                  `<img src=${brand.logoUrl ? brand.logoUrl : '/images/default_brand_logo.svg'} alt="${brand.name}" style="position: absolute; width: 30px; height: 30px; border-radius: 30px; top: 5px; left: 50%; translate: -50%;" />`,
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
