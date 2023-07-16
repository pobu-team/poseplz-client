import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';
import { useRecoilValue } from 'recoil';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import addGaEvent from '../../utils/addGaEvent';

type PoseProps = {
  poseId: string;
  active: boolean;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  margin-bottom: 5px;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
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

  const linkTo = `/pose/detail?poseId=${poseInfo.poseId}`;

  const [likes, setLikes] = useLocalStorage<string[]>('pose-store', []);

  const handleClickLike = (pose: PoseInfo) => {
    const personNum = pose.tags.filter((tag) => tag.type === 'NUMBER_OF_PEOPLE')[0].name;
    if (likes.includes(pose.poseId + personNum)) {
      const removedLike = likes.filter((like) => like !== (pose.poseId + personNum));
      setLikes(removedLike);
      return;
    }

    setLikes([...likes, pose.poseId + personNum]);
    addGaEvent(`like - ${pose.poseId}`);
  };

  return (
    <Container>
      <Link to={linkTo}>
        <img
          src={`https://server.poseplz.com${poseInfo.imageUrl}`}
          alt={poseInfo.imageUrl}
        />
      </Link>
      <button
        type="button"
        onClick={() => {
          handleClickLike(poseInfo);
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
