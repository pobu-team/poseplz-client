import ReactDOM from 'react-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isLogInModalShowingAtom } from '../recoil/loginState';

const Backdrop = styled.div`
  position: fixed;
  z-index:50;
  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 2.4rem;
  width: 90vw;
  max-width: 375px;
  z-index: 100;
  box-shadow: 0px 4px 8px 0px #0000001A;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  object {
    pointer-events: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 4rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.6rem;
    letter-spacing: -1.2%;

    @media screen and (max-width: 340px) {
      font-size: 1.6rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.6rem;
    padding: 1.6rem 3.2rem;
    border-radius: 9.9rem;
    border: none;
    background: #F9E000;
    font-weight: 600;
    font-size: 1.7rem;
    line-height: 2.4rem;
    cursor: pointer;

    object {
      margin-right: 0.8rem;
      pointer-events: none;
    }

    @media screen and (max-width: 340px) {
      padding: 1.6rem 2.8rem;
      font-size: 1.4rem;
    }
  }
`;

export default function LoginModal() {
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);

  return (
    <>
      { ReactDOM.createPortal(
        <Backdrop onClick={() => setIsLogInModalShowing(false)} />,
        document.getElementById('backdrop-root') as Element,
      )}
      { ReactDOM.createPortal(
        <Modal>
          <CloseButton
            type="button"
            onClick={() => {
              setIsLogInModalShowing(false);
            }}
          >
            <object data="/images/close_popup_L.svg" aria-label="close" />
          </CloseButton>
          <ModalContent>
            <h2>
              로그인하고 스크랩 기능을
              <br />
              사용해보세요!
            </h2>
            <button type="button">
              <object
                data="/images/Logo_Kakaotalk.svg"
                aria-label="카카오 로고"
              />
              카카오톡 로그인하기
            </button>
          </ModalContent>
        </Modal>,
       document.getElementById('modal-root') as Element,
      )}
    </>
  );
}
