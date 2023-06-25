import styled from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const ButtonContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.containerBackground};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    img {
      display: flex;
    }
  }
`;

export default function Button({ text, imgSrc, onClickFunc } : {
  text: string;
  imgSrc: string;
  onClickFunc: () =>void;
}) {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <ButtonContainer>
      <button type="button" onClick={onClickFunc}>
        <img src={isDarkMode ? `images/${imgSrc}_D.svg` : `images/${imgSrc}_L.svg`} alt={text} />
        {text}
      </button>
    </ButtonContainer>
  );
}
