import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import Button from './Button';
import addGaEvent from '../../utils/addGaEvent';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const homeActive = location.pathname === '/main';
  const searchActive = location.pathname === '/search';
  const myPageActive = location.pathname === '/mypage';

  const handleHomeButton = () => {
    navigate('/main');
    addGaEvent('GNB Home');
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
    addGaEvent('GNB My Page');
  };

  const handleClickSearchButton = () => {
    navigate('/main'); // 검색 기능 만들때까지는 메인화면으로 이동하도록
    addGaEvent('GNB Search');
  };

  return (
    <Container>
      <Button
        text="홈"
        imgSrc={homeActive ? 'home_active' : 'home_disable'}
        onClickFunc={handleHomeButton}
        active={homeActive}
      />
      <Button
        text="검색"
        imgSrc="search_default"
        onClickFunc={handleClickSearchButton}
        active={searchActive}
      />
      <Button
        text="찜한포즈"
        imgSrc={myPageActive ? 'mypage_active' : 'mypage_disable'}
        onClickFunc={handleMyPageClick}
        active={myPageActive}
      />
    </Container>
  );
}
