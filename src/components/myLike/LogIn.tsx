import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  img {
    width: 107px;
    height: 124px;
  }

  p {
    text-align: center;
    margin-top: 2.4rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.6rem;
    letter-spacing: -1.2%;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    margin-top: 2.4rem;
    padding: 1.6rem 2.4rem;
    border: 0;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.containerBackground};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2.4rem;
    cursor: pointer;
  }
`;

export default function LogIn() {
  const isDarkMode = useReadLocalStorage('darkMode');

  const handleLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <Container>
      <img
        src={isDarkMode ? '/images/no-image-dark.png' : '/images/no-image.png'}
        alt="require login"
      />
      <p>
        로그인을 하시면
        <br />
        스크랩 하실 수 있어요!
      </p>
      <button
        type="button"
        onClick={handleLogin}
      >
        로그인하기
      </button>
    </Container>
  );
}
