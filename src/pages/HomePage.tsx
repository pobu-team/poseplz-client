import { useNavigate } from 'react-router';
import styled from 'styled-components';
import addGaEvent from '../utils/addGaEvent';

const Container = styled.main`
  margin: auto;
  display: flex;
  max-width: 375px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.splashBackground};
`;

const BackgroundImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-image: url(${(props) => props.theme.img.splash});
  background-color: ${(props) => props.theme.colors.mainBackground};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StartButton = styled.button`
  display: flex;
  width: 100%;
  height: 7.5vh;
  font-size: 2.5vh;
  font-weight: 600;
  padding: 0;
  margin-bottom: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => (props.theme.colors.black)};
  background-color: ${(props) => (props.theme.colors.primary)};
`;

export default function HomePage() {
  // 다크모드 스위치 기능을 살릴때까지 로컬스토리지 다크모드를 임의로 true로 저장
  localStorage.setItem('darkMode', 'true');
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate('/main');
    addGaEvent('Start Button');
  };

  return (
    <Container>
      <BackgroundImage>
        <StartButton onClick={handleClickStart}>
          지금 시작하기
        </StartButton>
      </BackgroundImage>
    </Container>
  );
}
