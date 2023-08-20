import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import CategoryButtons from './CategoryButtons';
import CategoryPoseList from './CategoryPoseList';
import LoginModal from '../../ui/LoginModal';
import { isLogInModalShowingAtom } from '../../recoil/loginState';

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
  const isLogInModalShowing = useRecoilValue(isLogInModalShowingAtom);

  return (
    <Container>
      <CategoryButtons
        selectedTagId={selectedTagId}
        setSelectedTagId={setSelectedTagId}
        category={category}
      />
      <PoseContainer>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CategoryPoseList category={category} selectedTagId={selectedTagId} />
        </React.Suspense>
      </PoseContainer>
      {isLogInModalShowing && <LoginModal />}
    </Container>
  );
}
