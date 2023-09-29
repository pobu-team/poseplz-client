import styled, { css } from 'styled-components';

type ButtonProps = {
  active: boolean;
};

const Button = styled.button<ButtonProps>`
    padding: 3rem 2.5rem 2rem;
    margin-bottom: 16px;
    width: 100%;
    height: 18rem;
    border-radius: 16px;
    border: none;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.buttonBackground};
    cursor: pointer;

    @media screen and (max-width: 340px) {
      padding: 2rem 1.5rem 1rem;
      font-size: 1.5rem;
      height: 140px;
    }

    ${(props) => props.active && css`
      border: 3px solid ${props.theme.colors.primary};
      background-color: ${props.theme.colors.background};
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    `};

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
      margin-bottom: 5px;

      @media screen and (max-width: 340px) {
      height: 80px;
    }
    };
`;

type SquareButtonProps = {
  text: string;
  imgSrc: string;
  active: boolean;
  onClickFunc: () => void;
}

export default function SquareButton({
  text, imgSrc, active, onClickFunc,
}: SquareButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClickFunc}
      active={active}
    >
      <img src={imgSrc} alt={text} />
      {text}
    </Button>
  );
}
