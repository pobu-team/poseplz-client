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
  const { pathname } = useLocation();
  const MYPAGES = ['/mypage', '/mylike', '/upload'];
  const homeActive = pathname === '/main';
  const searchActive = pathname === '/search';
  const myPageActive = MYPAGES.includes(pathname);

  const handleNavClick = (location: string, eventName:string) => {
    navigate(location);
    addGaEvent(eventName);
  };

  return (
    <Container>
      <Button
        text="홈"
        imgSrc={homeActive ? 'home_active' : 'home_disable'}
        onClickFunc={() => handleNavClick('/main', 'GNB Home')}
        active={homeActive}
      />
      <Button
        text="매장찾기"
        imgSrc={searchActive ? 'shop_search_active' : 'shop_search_disable'}
        onClickFunc={() => handleNavClick('/search', 'GNB Search')}
        active={searchActive}
      />
      <Button
        text="포즈추천"
        imgSrc="recommend"
        onClickFunc={() => handleNavClick('/people', 'GNB Home')}
      />
      <Button
        text="포즈등록"
        imgSrc="register"
        onClickFunc={() => handleNavClick('/register', 'GNB Home')}
      />
      <Button
        text="마이"
        imgSrc={myPageActive ? 'mypage_active' : 'mypage_disable'}
        onClickFunc={() => handleNavClick('/mypage', 'GNB My Page')}
        active={myPageActive}
      />
    </Container>
  );
}
