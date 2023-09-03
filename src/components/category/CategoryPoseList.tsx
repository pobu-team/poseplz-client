import styled from 'styled-components';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';
import useFetchLikeList from '../../hooks/useFetchLikeList';

interface CategoryPoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

const Container = styled.div`
  margin-top: 10rem;
`;

export default function CategoryPoseList({ category, selectedTagId }: CategoryPoseListProps) {
  const poses = useFetchCategoryPoses(category, selectedTagId);
  const { likePoseIdArr, setLikePoseIdArr } = useFetchLikeList();

  return (
    <Container>
      <PoseList
        poses={poses}
        likePoseIdArr={likePoseIdArr}
        setLikePoseIdArr={setLikePoseIdArr}
      />
    </Container>
  );
}
