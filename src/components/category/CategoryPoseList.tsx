import styled from 'styled-components';
import { useLocation } from 'react-router';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';
import useFetchLikeList from '../../hooks/useFetchLikeList';

interface CategoryPoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

const Container = styled.div<{isPopular: boolean}>`
  margin-top: ${(props) => (props.isPopular ? '5.7rem' : '10rem')};
`;

export default function CategoryPoseList({ category, selectedTagId }: CategoryPoseListProps) {
  const poses = useFetchCategoryPoses(category, selectedTagId);
  const likePoseIdArr = useFetchLikeList();
  const location = useLocation();

  return (
    <Container isPopular={location.pathname === '/category/popular'}>
      <PoseList
        poses={poses}
        likePoseIdArr={likePoseIdArr}
      />
    </Container>
  );
}
