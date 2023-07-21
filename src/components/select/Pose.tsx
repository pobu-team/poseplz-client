import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';
import { useRecoilValue } from 'recoil';
import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
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
  margin-bottom: 5px;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  button {
    bottom: 10px;
    right: 0;
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  margin-bottom: 5px;
  height: 54rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
`;

export default function Pose({ poseId, active }: PoseProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
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
      {isLoading && (<Skeleton />)}
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
          handleClickLike(poseInfo);
        }}
      >
        <img
          src={
            active
              ? '/images/btn_like_active.svg'
              : '/images/btn_like_default.svg'
          }
          alt="btn_like"
        />
      </button>
    </Container>
  );
}
