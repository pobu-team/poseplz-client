import styled from 'styled-components';
import { PoseType } from '../../types/PoseType';
import Pose from '../select/Pose';

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

function HalfPoseContainer({ direction, likePoseIdArr }: {
  direction: PoseType[];
  likePoseIdArr: string[];
}) {
  return (
    <>
      {direction.map((pose: PoseType) => (
        <Pose
          key={pose.poseId}
          poseId={pose.poseId}
          likePoseIdArr={likePoseIdArr}
        />
      ))}
    </>
  );
}
export default function PoseList({ poses, likePoseIdArr }: {
  poses:PoseType[],
  likePoseIdArr: string[];
}) {
  const leftPoses = poses.filter((v, index) => index % 2 === 0).reverse();
  const rightPoses = poses.filter((v, index) => index % 2 !== 0).reverse();

  return (
    <Container>
      <PoseContainer>
        <HalfPoseContainer
          direction={leftPoses}
          likePoseIdArr={likePoseIdArr}
        />
      </PoseContainer>
      <PoseContainer>
        <HalfPoseContainer
          direction={rightPoses}
          likePoseIdArr={likePoseIdArr}
        />
      </PoseContainer>
    </Container>
  );
}
