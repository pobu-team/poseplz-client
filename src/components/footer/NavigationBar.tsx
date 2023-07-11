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
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeButton = () => {
    navigate('/main');
    addGaEvent('GNB Home');
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
    addGaEvent('GNB My Page');
  };

  return (
    <Container>
      <Button
        text="홈"
        imgSrc={(location.pathname === '/main') ? 'home_active' : 'home_disable'}
        onClickFunc={handleHomeButton}
      />
      <StartButton />
      <Button
        text="마이페이지"
        imgSrc={(location.pathname === '/mypage') ? 'mypage_active' : 'mypage_disable'}
        onClickFunc={handleMyPageClick}
      />
    </Container>
  );
}
