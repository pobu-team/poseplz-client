import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import MainHeader from '../components/header/MainHeader';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: auto;
  position: relative;
  max-height: fit-content;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  transform: translateY(-100%);

  object {
    width: 10.7rem;
    height: 12.4rem;
  }

  h2 {
    margin-top: 2.4rem;
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: -1.2%;
    text-align: center;
    color: ${(props) => props.theme.colors.message};
  }

  p {
    margin-top: 0.8rem;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: -1.2%;
    text-align: center;
    color: ${(props) => props.theme.colors.subMessage}
  }

  button {
    background: transparent;
    border: none;
    margin-top: 2.4rem;
    cursor: pointer;

    object {
      width: 4rem;
      height: 4rem;
      pointer-events: none;
    }
  }
`;

export default function ErrorPage() {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <Container>
      <MainHeader />
      <Main>
        <object
          data="/images/img_error.svg"
          aria-label="error"
        />
        <h2>일시적인 오류입니다.</h2>
        <p>잠시 후에 다시 시도해 주세요.</p>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          <object
            data={isDarkMode ? '/images/replay_D.svg' : '/images/replay_L.svg'}
            aria-label="refresh"
          />
        </button>
      </Main>
    </Container>
  );
}
