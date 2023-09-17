import styled from 'styled-components';
import { PoseType } from '../../types/PoseType';
import Pose from '../select/Pose';

const Container = styled.div`
  column-count: 2;
`;

export default function PoseList({ poses, likePoseIdArr }: {
  poses:PoseType[],
  likePoseIdArr: string[];
}) {
  return (
    <Container>
      {poses.map((pose: PoseType) => (
        <Pose
          key={pose.poseId}
          poseId={pose.poseId}
          likePoseIdArr={likePoseIdArr}
        />
      ))}
    </Container>
  );
}
