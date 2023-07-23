import React, { useState } from 'react';
import styled from 'styled-components';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import TopButton from './TopButton';
import CategoryButtons from './CategoryButtons';
import CategoryPoseList from './CategoryPoseList';
import Loading from '../common/Loading';

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
        <React.Suspense fallback={<div />}>
          <CategoryPoseList category={category} selectedTagId={selectedTagId} />
        </React.Suspense>
      </PoseContainer>
      <TopButton />
    </Container>
  );
}
