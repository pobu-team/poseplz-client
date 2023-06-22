import { useState } from 'react';

import { useParams } from 'react-router';

import styled from 'styled-components';

import SquareButton from '../../ui/SquareButton';

import {
  ONE_PERSON, THREE_MORE_PERSON, TWO_PERSON, themeObj,
} from '../../constant/tag';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10px;
  width: 100%;
`;

export default function Theme() {
  const { id } = useParams();

  let themeArr: string[] = [];
  if (id === '1') {
    themeArr = ONE_PERSON;
  }
  if (id === '2') {
    themeArr = TWO_PERSON;
  }
  if (id !== '1' && id !== '2') {
    themeArr = THREE_MORE_PERSON;
  }
  const [clickedTheme, setClickedTheme] = useState('');

  const handleClickTheme = (theme: string) => {
    setClickedTheme(String(theme));
  };

  return (
    <div>
      <Container>
        {themeArr.map((theme: string, index: number) => (
          <SquareButton
            key={theme + index}
            text={theme}
            imgSrc={`/images/theme-${themeObj[theme]}.svg`}
            active={clickedTheme === theme}
            onClickFunc={() => handleClickTheme(theme)}
          />
        ))}
      </Container>
    </div>
  );
}
