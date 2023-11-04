import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Backdrop from './Backdrop';

interface BoxModalProps {
  handleClose: () => void;
  handleClick: () => void;
  text: string;
}

const ModalBox = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: ${(props) => props.theme.colors.background};
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 95%;
  max-width: 284px;

  h3 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 3.2rem;
  text-align: center;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 1.6rem;
  display: flex;
  gap: 1.6rem;
`;

const ModalButton = styled.button`
  padding: 1.2rem 3.2rem;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: 0em;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  &:first-child {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.reverseText};
  }

  @media screen and (max-width: 300px) {
    padding: 1.2rem 2.4rem;
  }
`;

export default function BoxModal({ handleClose, handleClick, text }:BoxModalProps) {
  return (
    <>
      <Backdrop handleClose={handleClose} color="rgba(0, 0, 0, 0.8)" />
      { ReactDOM.createPortal(
        <ModalBox>
          <h3>{text}</h3>
          <ButtonGroup>
            <ModalButton type="button" onClick={handleClick}>확인</ModalButton>
            <ModalButton type="button" onClick={handleClose}>취소</ModalButton>
          </ButtonGroup>
        </ModalBox>,
        document.getElementById('modal-root') as Element,
      )}
    </>
  );
}
