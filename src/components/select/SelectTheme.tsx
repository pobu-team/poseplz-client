import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import SquareButton from '../../ui/SquareButton';

import { ButtonContainer, Container, SubmitBtnContainer } from './SelectTheme.styles';

import useFetchTagGroups from '../../hooks/useFetchTagGroups';

import themeImageId from '../../constant/tag';

export default function SelectTheme() {
  const navigate = useNavigate();

  const [isDisable, setIsDisable] = useState(true);

  const [clickedTheme, setClickedTheme] = useState('');

  const { id = '' } = useParams();

  const { themeObj } = useFetchTagGroups(Number(id));

  const handleClickTheme = (theme: string) => {
    setClickedTheme(theme);
    setIsDisable(false);
  };

  return (
    <Container>
      <h1>원하시는 테마를 선택해주세요</h1>
      <ButtonContainer>
        {Object.keys(themeObj).map((theme: string) => (
          <SquareButton
            key={theme}
            text={theme}
            imgSrc={`/images/theme-${themeImageId[theme]}.svg`}
            active={clickedTheme === theme}
            onClickFunc={() => handleClickTheme(theme)}
          />
        ))}
      </ButtonContainer>
      <SubmitBtnContainer>
        <button
          type="button"
          onClick={() => navigate(`/pose/${id}/${themeObj[clickedTheme]}`)}
          disabled={isDisable}
        >
          결과보기
        </button>
      </SubmitBtnContainer>
    </Container>
  );
}
