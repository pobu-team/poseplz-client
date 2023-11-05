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

const Container = styled.div<{active: boolean, ratio: string}>`
  position: relative;
  
  a {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: ${(props) => props.ratio};
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.3);

      ${(props) => props.active && css`
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
  const { width, height } = poseInfo.file;
  const poseStyle = height / width > 2 ? 'span 12' : 'span 6';

  return (
    <Container
      style={{ gridRowEnd: poseStyle }}
      active={!isLoading}
      ratio={String(width / height)}
    >
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
