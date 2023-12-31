import styled from 'styled-components';

const LocationButton = styled.a`
  z-index: 100;
  overflow: hidden;
  display: inline-block;
  position: absolute;
  bottom: 19rem;
  left: 10px;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(58, 70, 88, 0.45);
  border-radius: 2px;
  background: #fcfcfd;
  background-clip: border-box;
  text-align: center;
  -webkit-background-clip: padding;
  background-clip: padding-box;
`;

const LocationIcon = styled.span`
  overflow: hidden;
  display: inline-block;
  font-size: 1px;
  line-height: 1px;
  color: transparent;
  vertical-align: top;
  background-image: url('https://map.naver.com/p/assets/sprites/common.png?e8b0d83');
  background-size: 428px 403px;
  background-position: -130px -114px;
  width: 35px;
  height: 35px;

  &:active {
    background-size: 428px 403px;
    background-position: -87px -70px;
  }
`;

function LocationBtn({ onClickMyLocationBtn }: {onClickMyLocationBtn: () => void}) {
  return (
    <LocationButton href="#" onClick={onClickMyLocationBtn}>
      <LocationIcon>NAVER 그린팩토리</LocationIcon>
    </LocationButton>
  );
}

export default LocationBtn;
