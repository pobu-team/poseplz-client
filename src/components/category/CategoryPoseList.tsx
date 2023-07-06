import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';

interface CategoryPoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

export default function CategoryPoseList({ category, selectedTagId }: CategoryPoseListProps) {
  const poses = useFetchCategoryPoses(category, selectedTagId);
  return (
    <PoseList poses={poses} />
  );
}
