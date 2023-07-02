import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import Button from './Button';
import StartButton from './StartButton';

const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

export default function NavigationBar() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Container>
      <Button
        text="홈"
        imgSrc={(location.pathname === '/main') ? 'home_active' : 'home_disable'}
        onClickFunc={() => navigate('/main')}
      />
      <StartButton />
      <Button
        text="마이페이지"
        imgSrc={(location.pathname === '/mypage') ? 'mypage_active' : 'mypage_disable'}
        onClickFunc={() => navigate('/mypage')}
      />
    </Container>
  );
}
