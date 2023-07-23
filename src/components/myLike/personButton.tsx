import { useRef, useState } from 'react';

import styled from 'styled-components';
import addGaEvent from '../../utils/addGaEvent';
import useDragScroll from '../../hooks/useDragScroll';

const ButtonContainer = styled.div`
  width: 100%;
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

type PersonButtonProps = {
  like: string[];
  setIsPersonNum: (value: string[]) => void;
};

export default function PersonButton({
  like,
  setIsPersonNum,
}: PersonButtonProps) {
  const [selectedButton, setSelectedButton] = useState<number | undefined>(
    undefined,
  );
  const ref = useRef<HTMLDivElement>(null);
  const isClick = useDragScroll(ref);

  const [allButton, setAllButton] = useState(true);

  const handleClick = (num: number) => {
    if (!isClick) return;
    setSelectedButton(num);
    const filteredPose = like.filter((poseId: string) => poseId.slice(-2) === `${String(num)}인`);
    setIsPersonNum(filteredPose);
    setAllButton(false);
    addGaEvent(`MyPage People Filter - ${num}`);
  };

  const handleClickAll = () => {
    if (!isClick) return;
    setSelectedButton(undefined);
    setIsPersonNum(like);
    setAllButton(true);
    addGaEvent('MyPage People Filter - all');
  };

  return (
    <ButtonContainer ref={ref}>
      <CategoryButton
        type="button"
        onClick={handleClickAll}
        active={allButton}
      >
        전체
      </CategoryButton>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <CategoryButton
          key={item}
          type="button"
          onClick={() => {
            handleClick(item);
          }}
          active={selectedButton === item}
        >
          {item}
          명
        </CategoryButton>
      ))}
    </ButtonContainer>
  );
}
