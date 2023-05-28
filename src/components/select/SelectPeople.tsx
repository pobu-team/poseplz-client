import { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from 'styled-components';

import SquareButton from '../../ui/SquareButton';

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 340px){
      padding: 1.2rem;
    }

  h1 {
    font-size: 1.8em;
    font-weight: bold;
    letter-spacing: -0.67px;
    line-height: 1.36;
    margin-bottom: 2rem;

    @media screen and (max-width: 340px){
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    width: 100%;
  }
  
`;

const NextButton = styled.button`
  height: 2.6em;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
  color: '#000';
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-height: 812px) {
      padding: 2rem 1.5rem 1rem;
      font-size: 1.5rem;
    }
  
  &:disabled {
    opacity: 0.5;
  }
`;

export default function SelectPeople() {
  const navigate = useNavigate();
  const [personNum, setPersonNum] = useState('');

  const [_, setIsNextBtnDisabled] = useState(true);

  const handleClickPersonNum = (number: number) => {
    setPersonNum(String(number));
    setIsNextBtnDisabled(false);
  };

  return (
    <Container>
      <h1>몇 명이서 오셨나요?</h1>
      <div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <SquareButton
            key={item}
            text={`${item}명`}
            imgSrc={`/images/person-${index + 1}.png`}
            active={personNum === String(item)}
            onClickFunc={() => handleClickPersonNum(item)}
          />
        ))}
      </div>
      <NextButton
        type="button"
        onClick={() => {
          navigate(`/theme/${personNum}`);
        }}
        disabled={personNum === ''}
      >
        다음
      </NextButton>
    </Container>
  );
}
