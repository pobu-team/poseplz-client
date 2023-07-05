import { useLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import { PoseType } from '../../types/PoseType';
import Pose from '../select/Pose';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import CATEGORY from '../../types/CategoryType';

const PoseContainer = styled.div`
  column-count: 2;
  column-gap: 5px;
`;
interface PoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

export default function PoseList({ category, selectedTagId }: PoseListProps) {
  const [like, _] = useLocalStorage<string[]>('pose-store', []);
  const likePoseIdArr = like.map((item) => item.slice(0, -3));
  const poses = useFetchCategoryPoses(category, selectedTagId);

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
