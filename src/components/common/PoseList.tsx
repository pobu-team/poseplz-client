import { useLocalStorage } from 'usehooks-ts';
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

export default function PoseList({ poses }: { poses: PoseType[]}) {
  const [like, _] = useLocalStorage<string[]>('pose-store', []);
  const likePoseIdArr = like.map((item) => item.slice(0, -3));
  const leftPoses = poses.filter((v, index) => index % 2 === 0).reverse();
  const rightPoses = poses.filter((v, index) => index % 2 !== 0).reverse();

  return (
    <Container>
      <PoseContainer>
        {leftPoses.map((pose: PoseType) => {
          const active: boolean = likePoseIdArr.includes(pose.poseId);
          return (
            <Pose
              key={pose.poseId}
              poseId={pose.poseId}
              active={active}
            />
          );
        })}
      </PoseContainer>
      <PoseContainer>
        {rightPoses.map((pose: PoseType) => {
          const active: boolean = likePoseIdArr.includes(pose.poseId);
          return (
            <Pose
              key={pose.poseId}
              poseId={pose.poseId}
              active={active}
            />
          );
        })}
      </PoseContainer>
    </Container>
  );
}
