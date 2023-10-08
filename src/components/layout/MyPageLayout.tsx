import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.backgroundTertiary};
`;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 375px;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
`;

export default function MyPageLayout() {
  const { pathname } = useLocation();
  const Titles: Record<string, string> = {
    '/mylike': '찜한 포즈',
    '/upload': '업로드한 포즈',
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleHeader title={pathname === '/mypage' ? '마이페이지' : Titles[pathname]} />
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
