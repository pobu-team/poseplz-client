import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import Button from './Button';
import StartButton from './StartButton';
import addGaEvent from '../../utils/addGaEvent';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const homeActive = location.pathname === '/main';
  const myPageActive = location.pathname === '/mypage';

  const handleHomeButton = () => {
    navigate('/main');
    addGaEvent('GNB Home');
  };

  const handleMyPageClick = () => {
    window.location.href = '/mypage';
    addGaEvent('GNB My Page');
  };

  return (
    <Container>
      <Button
        text="홈"
        imgSrc={homeActive ? 'home_active' : 'home_disable'}
        onClickFunc={handleHomeButton}
        active={homeActive}
      />
      <StartButton />
      <Button
        text="찜한포즈"
        imgSrc={myPageActive ? 'mypage_active' : 'mypage_disable'}
        onClickFunc={handleMyPageClick}
        active={myPageActive}
      />
    </Container>
  );
}
