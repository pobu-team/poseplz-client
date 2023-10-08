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
};

const Container = styled.div<{active: boolean, height: number, width: number}>`
  position: relative;
  width: 100%;
  margin-bottom: 5px;
  a {
    aspect-ratio: ${(props) => `${props.width}/${props.height}`};
    ${(props) => props.active && css`
        width: 100%;
        height: auto;
      `}
    img {
      width: 100%;
      aspect-ratio: ${(props) => `${props.width}/${props.height}`};
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.1);
      ${(props) => props.active && css`
        border-radius: 10px;
        width: 100%;
        height: auto;
        aspect-ratio: initial;
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

export default function Pose({ poseId, likePoseIdArr }: PoseProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const [isLoading, setIsLoading] = useState(true);
  const linkTo = `/pose/detail?poseId=${poseInfo.poseId}`;

  return (
    <Container active={!isLoading} height={poseInfo.file.height} width={poseInfo.file.width}>
      <Link to={linkTo}>
        <img
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
        type="DEFAULT"
      />
    </Container>
  );
}
