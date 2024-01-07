import styled from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const ButtonContainer = styled.div<{ active?: boolean}>`
  width: 100%;
  height: 7rem;
  margin-bottom: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    text-align: center;
    color: ${(props) => (props.active ? props.theme.colors.text : props.theme.colors.navDisabledText)};
    background-color: ${(props) => props.theme.colors.mainBackground};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    img {
      display: flex;
      margin-bottom: 4px;
    }
  }
`;

export default function Button({
  text, imgSrc, onClickFunc, active,
} : {
  text: string;
  imgSrc: string;
  onClickFunc: () =>void;
  active?: boolean;
}) {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <ButtonContainer active={active}>
      <button type="button" onClick={onClickFunc}>
        <img src={isDarkMode ? `/images/${imgSrc}_D.svg` : `/images/${imgSrc}_L.svg`} alt={text} />
        {text}
      </button>
    </ButtonContainer>
  );
}
