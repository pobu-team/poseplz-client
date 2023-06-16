import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  ONE_PERSON, RANDOM, THREE_MORE_PERSON, TWO_PERSON, themeObj,
} from '../../constant/tag';

import SquareButton from '../../ui/SquareButton';

import useFetchTag from '../../hooks/useFetchTag';

import { ButtonContainer, Container, SubmitBtnContainer } from './SelectTheme.styles';

export default function SelectTheme() {
  const navigate = useNavigate();

  const [isDisable, setIsDisable] = useState(true);

  const { id = '' } = useParams();

  let themeArr: string[] = [];
  if (id === '1') themeArr = ONE_PERSON;
  if (id === '2') themeArr = TWO_PERSON;
  if (id !== '1' && id !== '2') themeArr = THREE_MORE_PERSON;
  if (id === 'random') themeArr = RANDOM;

  const [clickedTheme, setClickedTheme] = useState('');

  const [personNumTag, _] = useFetchTag(id, clickedTheme);
  // const themeIds = theme.map((tag: Tag) => tag.tagId);
  const handleClickTheme = (theme: string) => {
    setClickedTheme(String(theme));
    setIsDisable(false);
  };

  return (
    <Container>
      <h1>원하시는 테마를 선택해주세요</h1>
      <ButtonContainer>
        {themeArr.map((theme: string) => (
          <SquareButton
            key={theme}
            text={theme}
            imgSrc={`/images/theme-${themeObj[theme]}.svg`}
            active={clickedTheme === theme}
            onClickFunc={() => handleClickTheme(theme)}
          />
        ))}
      </ButtonContainer>
      <SubmitBtnContainer>
        <button
          type="button"
          onClick={() => {
            if (id === 'random') {
              navigate(`/pose/${id}/random`);
              return;
            }
            navigate(`/pose/${id}/${personNumTag[0].tagId}`);
          }}
        >
          그냥 넘어갈래요
        </button>
        <button
          type="button"
          onClick={() => {
            if (id === 'random') {
              navigate(`/pose/${id}/random`);
              return;
            }
            navigate(`/pose/${id}/${personNumTag[0].tagId}`);
          }}
          disabled={isDisable}
        >
          결과보기
        </button>
      </SubmitBtnContainer>
    </Container>
  );
}
