import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import useDragScroll from '../../hooks/useDragScroll';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import useFetchCategoryTags from '../../hooks/useFetchCategoryTags';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  overflow: scroll;
  white-space: nowrap;
  scroll-snap-type: none;
  -webkit-overflow-scrolling: touch;
  background-color: ${(props) => props.theme.colors.containerBackground};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button<{active: boolean}>`
  background-color: ${(props) => props.theme.colors.containerBackground};
  border: none;
  border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.colors.text}` : 'none')};
  font-size: 1.6rem;
  padding-block: ${(props) => props.theme.sizes.smallContentPadding};
  padding-inline: 1.6rem;
  color: ${(props) => (props.active ? props.theme.colors.text : props.theme.colors.disabledText)};
  font-weight: 600;
  line-height: 1.63;
  cursor: pointer;
`;

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};  
`;

const TopButtonContainer = styled.div`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  right: 1.6rem;
`;

const TopButton = styled.button`
  position: fixed;
  bottom: 8rem;
  z-index: 99;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;

  img {
    width: 4.8rem;
    height: 4.8rem;
    filter: drop-shadow( 0 2px 4px 0 rgba(0, 0, 0, 0.1));
  }
`;

export default function CategoryPose({ category }: {category:CATEGORY}) {
  const isDarkMode = useReadLocalStorage('darkMode');

  // 드래그 스크롤
  const ref = useRef<HTMLDivElement>(null);
  const isClick = useDragScroll(ref);

  // 카테고리별 데이터 및 카테고리 불러오기
  const initialState = category === CATEGORY.PEOPLE ? ALL_PEOPLE_TAG : COMIC_TAG;
  const [selectedTagId, setSelectedTagId] = useState(initialState);
  const poses = useFetchCategoryPoses(category, selectedTagId);
  const tags = useFetchCategoryTags(category);

  const handleClick = (tagId: string) => {
    if (!isClick) return;
    setSelectedTagId(tagId);
  };

  const handleTopButtonClick = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <ButtonContainer ref={ref}>
        {tags.map((tag) => (
          <CategoryButton
            key={tag.tagId}
            type="button"
            onClick={() => handleClick(tag.tagId)}
            active={selectedTagId === tag.tagId}
          >
            {tag.selectorName}
          </CategoryButton>
        ))}
      </ButtonContainer>
      <PoseContainer>
        <PoseList poses={poses} />
      </PoseContainer>
      <TopButtonContainer>
        <TopButton onClick={handleTopButtonClick}>
          <img
            src={isDarkMode ? '/images/icon_top_dark.svg' : '/images/icon_top_light.svg'}
            alt="상단 이동 버튼"
          />
        </TopButton>
      </TopButtonContainer>
    </Container>
  );
}
