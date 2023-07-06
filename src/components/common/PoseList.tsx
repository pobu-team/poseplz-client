import { useLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import { PoseType } from '../../types/PoseType';
import Pose from '../select/Pose';

const PoseContainer = styled.div`
  column-count: 2;
  column-gap: 5px;
`;

export default function PoseList({ poses }: {poses:PoseType[]}) {
  const [like, _] = useLocalStorage<string[]>('pose-store', []);
  const likePoseIdArr = like.map((item) => item.slice(0, -3));

  return (
    <PoseContainer>
      {poses.map((pose: PoseType) => {
        const active: boolean = likePoseIdArr.includes(pose.poseId);
        return (
          <Pose key={pose.poseId} poseId={pose.poseId} active={active} />
        );
      })}
    </PoseContainer>
  );
}
