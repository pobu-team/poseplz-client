import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LikeButton from './LikeButton';
import { PoseInfo } from '../../types/PoseType';

const PoseContainer = styled.div<{active: boolean, ratio: string}>`
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

export default function Pose({ pose, likePoseIdArr }: {
  pose: PoseInfo;
  likePoseIdArr: string[];
}) {
  const { poseId, file } = pose;
  const { width, height, fileId } = file;
  const linkTo = `/pose/detail?poseId=${poseId}`;
  const poseStyle = height / width > 2 ? 'span 12' : 'span 6';
  return (
    <PoseContainer
      key={poseId}
      style={{ gridRowEnd: poseStyle }}
      active
      ratio={String(pose.file.width / pose.file.height)}
    >
      <Link to={linkTo}>
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}${pose.thumbnailImageUrl}`}
          alt={fileId}
        />
      </Link>
      <LikeButton
        likePoseIdArr={likePoseIdArr}
        poseId={pose.poseId}
        type="DEFAULT"
      />

    </PoseContainer>
  );
}
