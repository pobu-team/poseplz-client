import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import { isLogInModalShowingAtom, isLoggedInAtom } from '../../recoil/loginState';

type PoseProps = {
  poseId: string;
  active: boolean;
};

const Container = styled.div<{active: boolean}>`
  position: relative;
  width: 100%;
  display: inline-block;
  margin-bottom: 5px;

  a {
    width: 100%;
    height: 54rem;
    ${(props) => props.active && css`
        width: 100%;
        height: auto;
      `}
    img {
      width: 100%;
      height: 54rem;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.1);
      ${(props) => props.active && css`
        width: 100%;
        border-radius: 10px;
        width: 100%;
        height: auto;
        object-fit: contain;
      `}
    }
  }

  button {
    bottom: 10px;
    right: 0;
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
  
    object {
      pointer-events: none;
    }
  }
`;

export default function Pose({ poseId, active }: PoseProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);
  const imgRef = useRef<HTMLImageElement>(null);
  const linkTo = `/pose/detail?poseId=${poseInfo.poseId}`;

  const handleClickLike = () => {
    if (isLoggedIn) {
      // TODO : 계정마다 찜한포즈 추가
      return;
    }
    setIsLogInModalShowing(true);
  };

  return (
    <Container active={!isLoading}>
      <Link to={linkTo}>
        <img
          ref={imgRef}
          src={`https://server.poseplz.com${poseInfo.imageUrl}`}
          alt={poseInfo.imageUrl}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </Link>
      <button
        type="button"
        onClick={() => {
          handleClickLike();
        }}
      >
        <object
          data={
            active
              ? '/images/btn_like_active.svg'
              : '/images/btn_like_default.svg'
          }
          aria-label="btn_like"
        />
      </button>
    </Container>
  );
}
