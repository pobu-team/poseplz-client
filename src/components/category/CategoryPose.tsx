import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import CATEGORY from '../../types/CategoryType';
import CategoryButtons from './CategoryButtons';
import CategoryPoseList from './CategoryPoseList';
import LoginModal from '../../ui/LoginModal';
import { isLogInModalShowingAtom } from '../../recoil/loginState';
import { PeopleCategoryTabAtom, ThemeCategoryTabAtom } from '../../recoil/tabState';
import PopularPoseList from './PopularPoseList';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
`;

export default function CategoryPose({ category }: {category:CATEGORY}) {
  const isLogInModalShowing = useRecoilValue(isLogInModalShowingAtom);
  const [peopleTab, setPeopleTab] = useRecoilState(PeopleCategoryTabAtom);
  const [themeTab, setThemeTab] = useRecoilState(ThemeCategoryTabAtom);

  const isPopular = category === 'popular';

  return (
    <Container>
      <CategoryButtons
        selectedTagId={category === CATEGORY.PEOPLE ? peopleTab : themeTab}
        setSelectedTagId={category === CATEGORY.PEOPLE ? setPeopleTab : setThemeTab}
        category={category}
      />
      <PoseContainer>
        {isPopular ? (
          <PopularPoseList />
        ) : (
          <CategoryPoseList
            category={category}
            selectedTagId={category === CATEGORY.PEOPLE ? peopleTab : themeTab}
          />
        )}
      </PoseContainer>
      {isLogInModalShowing && <LoginModal />}
    </Container>
  );
}
