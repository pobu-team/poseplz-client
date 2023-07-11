import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useTracking from '../hooks/useTracking';
import addGaEvent from '../utils/addGaEvent';

const Container = styled.main`
  margin: auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-image: url(${(props) => props.theme.img.splash});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StartButton = styled.button`
  display: flex;
  width: 40vh;
  height: 7.5vh;
  font-size: 2.5vh;
  padding: 0;
  margin-bottom: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => (props.theme.colors.text)};
  background-color: ${(props) => (props.theme.colors.startButton)};
`;

export default function HomePage() {
  const navigate = useNavigate();
  const initialized = useTracking();

  const handleClickStart = () => {
    navigate('/main');
    addGaEvent('Start Button');
  };

  return (
    <Container>
      <StartButton onClick={handleClickStart}>
        지금 시작하기
      </StartButton>
    </Container>
  );
}
