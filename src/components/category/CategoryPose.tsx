import { useRef, useState } from 'react';
import styled from 'styled-components';
import useDragScroll from '../../hooks/useDragScroll';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import useFetchCategoryTags from '../../hooks/useFetchCategoryTags';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../../constant/tagId';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';

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

export default function CategoryPose({ category }: {category:CATEGORY}) {
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
  return (
    <>
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
    </>
  );
}
