import { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import useFetchBrands from '../../hooks/photoBooth/useFetchBrands';
import useDragScroll from '../../hooks/useDragScroll';

const BrandTagsContainer = styled.div`
  display: flex;
  padding: 16px 8px;
  max-width: 1000px;
  align-items: center;
  gap: 10px;
  z-index: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
  overflow-x: scroll;
  cursor: grab;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagButton = styled.button<{active: boolean}>`
  width: max-content;
  height: 36px;
  border-radius: 30px;
  padding: 5px 10px;
  border: 2px solid ${({ active, theme: { colors } }) => (active ? colors.primary : colors.lineNormal)};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  color: ${({ theme: { colors } }) => colors.message};
`;

function TagContainer({ tag, setTag }: {tag: string; setTag: Dispatch<SetStateAction<string>>}) {
  const { data: brandsQueryResponse } = useFetchBrands();

  const brandContainerRef = useRef<HTMLDivElement>(null);

  const isClick = useDragScroll(brandContainerRef);

  const handleClickBrandTag = (brandName: string) => () => {
    if (!isClick) {
      return;
    }
    if (tag === brandName) {
      setTag('');
      return;
    }
    setTag(brandName);
  };
  return (
    <BrandTagsContainer ref={brandContainerRef}>
      {brandsQueryResponse?.map((brand) => (
        <TagWrapper key={brand.brandId}>
          <TagButton
            active={brand.name === tag}
            onClick={handleClickBrandTag(brand.name)}
          >
            {brand.name}
          </TagButton>
        </TagWrapper>
      ))}
    </BrandTagsContainer>
  );
}

export default TagContainer;
