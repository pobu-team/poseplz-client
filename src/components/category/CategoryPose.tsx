import React, { useState } from 'react';
import styled from 'styled-components';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import CategoryButtons from './CategoryButtons';
import CategoryPoseList from './CategoryPoseList';

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

  return (
    <Container>
      <CategoryButtons
        selectedTagId={selectedTagId}
        setSelectedTagId={setSelectedTagId}
        category={category}
      />
      <PoseContainer>
        <React.Suspense fallback={<div>loading...</div>}>
          <CategoryPoseList category={category} selectedTagId={selectedTagId} />
        </React.Suspense>
      </PoseContainer>
    </Container>
  );
}
