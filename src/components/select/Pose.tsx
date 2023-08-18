import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useRef, useState } from 'react';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import LikeButton from './LikeButton';

type PoseProps = {
  poseId: string;
  likePoseIdArr: string[];
  setLikePoseIdArr: (value: string[]) => void;
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

export default function Pose({ poseId, likePoseIdArr, setLikePoseIdArr }: PoseProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const linkTo = `/pose/detail?poseId=${poseInfo.poseId}`;

  return (
    <Container active={!isLoading}>
      <Link to={linkTo}>
        <img
          ref={imgRef}
          src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`}
          alt={poseInfo.imageUrl}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </Link>
      <LikeButton
        likePoseIdArr={likePoseIdArr}
        poseId={poseId}
        setLikePoseIdArr={setLikePoseIdArr}
      />
    </Container>
  );
}
