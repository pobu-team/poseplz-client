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
  background-color: ${(props) => props.theme.colors.background};
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

  svg {
    width: 4rem;
    height: 4rem;
    padding: .8rem;
    background-color: ${(props) => props.theme.colors.modalCloseButtonBackground};
    border-radius: 50%;
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
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;

    object {
      margin-right: 0.8rem;
    }

    @media screen and (max-width: 340px) {
      padding: 1.6rem 2.8rem;
      font-size: 1.4rem;
    }
  }
`;

const KakaoLogo = styled.div`
  background-image: url("/images/Logo_Kakaotalk.svg");
  margin-right: 0.8rem;
  width: 26px;
  height: 24px;
`;

export default function LoginModal() {
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);

  const handleLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5.33301 17.5556L17.5552 5.33339L18.6663 6.4445L6.44411 18.6667L5.33301 17.5556Z" fill="#888888" />
              <path d="M18.6663 17.5556L6.44417 5.33337L5.33306 6.44448L17.5552 18.6667L18.6663 17.5556Z" fill="#888888" />
            </svg>
          </CloseButton>
          <ModalContent>
            <h2>
              로그인하고 스크랩 기능을
              <br />
              사용해보세요!
            </h2>
            <button type="button" onClick={handleLogin}>
              <KakaoLogo />
              카카오톡 로그인하기
            </button>
          </ModalContent>
        </Modal>,
       document.getElementById('modal-root') as Element,
      )}
    </>
  );
}
