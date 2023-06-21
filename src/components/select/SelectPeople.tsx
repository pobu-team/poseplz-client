import { useState } from 'react';

import { useNavigate } from 'react-router';

import SquareButton from '../../ui/SquareButton';

import { ButtonContainer, Container, SubmitBtnContainer } from './SelectTheme.styles';

export default function SelectPeople() {
  const navigate = useNavigate();
  const [personNum, setPersonNum] = useState(0);

  const handleClickPersonNum = (number: number) => {
    setPersonNum(number);
  };

  const handleClickRandom = () => {
    navigate('/theme/random');
  };

  return (
    <Container>
      <h1>몇 명이서 오셨나요?</h1>
      <ButtonContainer>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <SquareButton
            key={item}
            text={`${item}명`}
            imgSrc={`/images/person-${index + 1}.png`}
            active={personNum === item}
            onClickFunc={() => handleClickPersonNum(item)}
          />
        ))}
      </ButtonContainer>
      <SubmitBtnContainer>
        <button
          type="button"
          onClick={handleClickRandom}
        >
          그냥 넘어갈래요
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(`/theme/${personNum}`);
          }}
          disabled={personNum === 0}
        >
          다음
        </button>
      </SubmitBtnContainer>
    </Container>
  );
}
