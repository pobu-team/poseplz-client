import { useState } from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.myPageHeader};
  padding: 10px 10px 20px;
  position: sticky;
  z-index: 10;

  button {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin: 4px;
    border-radius: 10px;
    width: 80px;
    height: 40px;
    border: none;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.buttonBackground};
    @media screen and (max-width: 400px) {
      margin: 2px;
    }
  }

  button.selected {
    border: 2px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.background};
  }
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

  const [allButton, setAllButton] = useState(true);

  const handleClick = (num: number) => {
    setSelectedButton(num);
    const filteredPose = like.filter((poseId: string) => poseId.slice(-2) === `${String(num)}인`);
    setIsPersonNum(filteredPose);
    setAllButton(false);
  };

  const handleClickAll = () => {
    setSelectedButton(undefined);
    setIsPersonNum(like);
    setAllButton(true);
  };

  return (
    <ButtonContainer>
      <button
        type="button"
        onClick={handleClickAll}
        className={allButton ? 'selected' : ''}
      >
        전체
      </button>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => {
            handleClick(item);
          }}
          className={selectedButton === item ? 'selected' : ''}
        >
          {item}
          명
        </button>
      ))}
    </ButtonContainer>
  );
}
