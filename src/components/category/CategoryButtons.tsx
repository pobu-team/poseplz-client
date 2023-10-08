import { useRef } from 'react';
import styled from 'styled-components';
import useDragScroll from '../../hooks/useDragScroll';
import useFetchCategoryTags from '../../hooks/useFetchCategoryTags';
import CATEGORY from '../../types/CategoryType';
import addGaEvent from '../../utils/addGaEvent';

const ButtonContainer = styled.div`
  overflow: scroll;
  position: fixed;
  max-width: 375px;
  width: 100%;
  top: 5.5rem;
  z-index: 99;
  white-space: nowrap;
  scroll-snap-type: none;
  -webkit-overflow-scrolling: touch;
  background-color: ${(props) => props.theme.colors.containerBackground};

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 340px) {
    top: 4.9rem
  }
`;

const CategoryButton = styled.button<{active: boolean}>`
  background-color: ${(props) => props.theme.colors.mainBackground};
  border: none;
  border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.colors.text}` : 'none')};
  font-size: 1.6rem;
  padding-block: ${(props) => props.theme.sizes.smallContentPadding};
  padding-inline: 1.6rem;
  color: ${(props) => (props.active ? props.theme.colors.text : props.theme.colors.textAlternative)};
  font-weight: 600;
  line-height: 1.63;
  cursor: pointer;
`;

interface CategoryButtonsProps {
  selectedTagId: string;
  setSelectedTagId: (id: string) => void;
  category: CATEGORY
}

export default function CategoryButtons({ selectedTagId, setSelectedTagId, category }
  : CategoryButtonsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isClick = useDragScroll(ref);
  const tags = useFetchCategoryTags(category);
  const handleClick = (tagId: string, selectorName: string) => {
    if (!isClick) return;
    setSelectedTagId(tagId);
    addGaEvent(`Category Tab - ${selectorName}`);
  };

  return (
    <ButtonContainer ref={ref}>
      {tags.map((tag) => (
        <CategoryButton
          key={tag.tagId}
          type="button"
          onClick={() => handleClick(tag.tagId, tag.selectorName)}
          active={selectedTagId === tag.tagId}
        >
          {tag.selectorName}
        </CategoryButton>
      ))}
    </ButtonContainer>
  );
}
