import styled from 'styled-components';
import { PoseInfo } from '../../types/PoseType';
import Pose from '../select/Pose';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-auto-rows: auto;
  column-gap: 10px;
  row-gap: 16px;
`;

export default function PoseList({ poses, likePoseIdArr }: {
  poses:PoseInfo[],
  likePoseIdArr: string[];
}) {
  return (
    <Container>
      {poses.map((pose) => (
        <Pose
          key={pose.poseId}
          pose={pose}
          likePoseIdArr={likePoseIdArr}
        />
      ))}
    </Container>
  );
}
