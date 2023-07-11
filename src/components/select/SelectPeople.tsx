import { useState } from 'react';

import { useNavigate } from 'react-router';

import { ButtonContainer, Container, SubmitBtnContainer } from './SelectTheme.styles';

import useFetchCategoryTags from '../../hooks/useFetchCategoryTags';

import SquareButton from '../../ui/SquareButton';

import CATEGORY from '../../types/CategoryType';
import addGaEvent from '../../utils/addGaEvent';

export default function SelectPeople() {
  const navigate = useNavigate();
  const [personNum, setPersonNum] = useState('');
  const personNumData = useFetchCategoryTags(CATEGORY.PEOPLE);
  const personNumArr = [...personNumData].slice(1);

  const handleClickPersonNum = (name: string) => {
    setPersonNum(name);
    addGaEvent(`People Select - ${name}`);
  };

  const handleClickRandom = () => {
    navigate('/theme/random');
    addGaEvent('People Skip');
  };

  return (
    <Container>
      <h1>몇 명이서 오셨나요?</h1>
      <ButtonContainer>
        {personNumArr.map((person) => (
          <SquareButton
            key={person.tagId}
            text={`${person.selectorName}`}
            imgSrc={`/images/person-${(person.description || '')}.png`}
            active={personNum === person.description}
            onClickFunc={() => handleClickPersonNum(person.description || '')}
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
            addGaEvent('People Next');
          }}
          disabled={personNum === ''}
        >
          다음
        </button>
      </SubmitBtnContainer>
    </Container>
  );
}
