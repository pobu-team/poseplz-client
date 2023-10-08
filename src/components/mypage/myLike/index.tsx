import { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import LogIn from './LogIn';
import LikePoseList from './LikePoseList';
import CategoryButtons from '../../category/CategoryButtons';
import { ALL_PEOPLE_TAG } from '../../../constant/tagId';
import CATEGORY from '../../../types/CategoryType';

const LikePoseLiseContainer = styled.div`
  margin-top: 10rem;
`;

export default function MyLike() {
  const [selectedTagId, setSelectedTagId] = useState(ALL_PEOPLE_TAG);
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const isLoggedIn = storedAccessToken && storedAccessToken.length > 0;

  return (
    <>
      <CategoryButtons
        selectedTagId={selectedTagId}
        setSelectedTagId={setSelectedTagId}
        category={CATEGORY.PEOPLE}
      />
      <LikePoseLiseContainer>
        {isLoggedIn
          ? <LikePoseList selectedTagId={selectedTagId} />
          : <LogIn />}
      </LikePoseLiseContainer>
    </>
  );
}
