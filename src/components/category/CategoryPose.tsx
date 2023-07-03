import { useState } from 'react';
import styled from 'styled-components';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';
import TopButton from './TopButton';
import CategoryButtons from './CategoryButtons';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};  
`;

export default function CategoryPose({ category }: {category:CATEGORY}) {
  const initialState = category === CATEGORY.PEOPLE ? ALL_PEOPLE_TAG : COMIC_TAG;
  const [selectedTagId, setSelectedTagId] = useState(initialState);
  const poses = useFetchCategoryPoses(category, selectedTagId);

  return (
    <Container>
      <CategoryButtons
        selectedTagId={selectedTagId}
        setSelectedTagId={setSelectedTagId}
        category={category}
      />
      <PoseContainer>
        <PoseList poses={poses} />
      </PoseContainer>
      <TopButton />
    </Container>
  );
}
