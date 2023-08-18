import { useReadLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { PoseType } from '../../types/PoseType';
import Pose from '../select/Pose';
import { fetchLikesSelector } from '../../recoil/likeState';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const PoseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  height: auto;
  overflow: hidden;
  padding: .3rem;
`;

function HalfPoseContainer({ direction, likePoseIdArr, setLikePoseIdArr }: {
  direction: PoseType[];
  likePoseIdArr: string[];
  setLikePoseIdArr: (value: string[]) => void;
}) {
  return (
    <>
      {direction.map((pose: PoseType) => (
        <Pose
          key={pose.poseId}
          poseId={pose.poseId}
          likePoseIdArr={likePoseIdArr}
          setLikePoseIdArr={setLikePoseIdArr}
        />
      ))}
    </>
  );
}
export default function PoseList({ poses }: {poses:PoseType[]}) {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const initialLikePose = useRecoilValue(fetchLikesSelector(storedAccessToken));
  const [likePoseIdArr, setLikePoseIdArr] = useState(initialLikePose);
  const leftPoses = poses.filter((v, index) => index % 2 === 0).reverse();
  const rightPoses = poses.filter((v, index) => index % 2 !== 0).reverse();

  return (
    <Container>
      <PoseContainer>
        <HalfPoseContainer
          direction={leftPoses}
          likePoseIdArr={likePoseIdArr}
          setLikePoseIdArr={setLikePoseIdArr}
        />
      </PoseContainer>
      <PoseContainer>
        <HalfPoseContainer
          direction={rightPoses}
          likePoseIdArr={likePoseIdArr}
          setLikePoseIdArr={setLikePoseIdArr}
        />
      </PoseContainer>
    </Container>
  );
}
