/* eslint-disable max-len */
import { Marker, useNavermaps } from 'react-naver-maps';
import { Dispatch, SetStateAction } from 'react';
import { PhotoBooth } from '../../types/PhotoBooth';
import { BoothDetailModalProps } from './BoothDetailModal';

type MarkerItemProps = {
  tag: string;
  photoBoothInfo: PhotoBooth;
  setBoothModal: Dispatch<SetStateAction<BoothDetailModalProps & {visible: boolean;}>>;
}

function MarkerItem({ tag, photoBoothInfo, setBoothModal }: MarkerItemProps) {
  const navermaps = useNavermaps();
  const {
    brand, coordinates, name, address,
  } = photoBoothInfo;

  const handleClickPin = (e: naver.maps.PointerEvent) => {
    e.pointerEvent.stopPropagation();
    setBoothModal((prev) => ({
      ...prev, visible: true, name, address, brand,
    }));
  };

  /**
   *  마커를 디테일하게 커스텀하는 방법을 찾다 아래처럼 HTML 콘텐츠를 전달하는 방법이 있어 이렇게 작성하였습니다.
   *  @see https://stickode.tistory.com/937
   *  */
  const contentIcon = [
    '<div style="zIndex: 2; width: 38px; height: 46px; position: relative;">',
    '<img src="/images/base_marker_icon.svg" alt="marker" style="position: absolute; left: 50%; translate: -50%; width: 50px; height: 50px;" />',
    `<img src=${brand.logoUrl ? brand.logoUrl : '/images/default_brand_logo.svg'} alt="${brand.name ? brand.name : '기본이미지'}" style="position: absolute; width: 30px; height: 30px; border-radius: 30px; top: 5px; left: 50%; translate: -50%;" />`,
    '</div>',
  ].join('');

  return (
    <Marker
      visible={tag === '' || brand.name === tag}
      position={new navermaps.LatLng(coordinates.latitude, coordinates.longitude)}
      icon={{
        content: contentIcon,
        scaledSize: { width: 30, height: 30 },
        anchor: new naver.maps.Point(50, 50),
      }}
      onClick={(e) => handleClickPin(e)}
    />
  );
}

export default MarkerItem;
