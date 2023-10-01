import { Outlet } from 'react-router-dom';
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
  return (
    <Container>
      <HeaderContainer>
        <TitleHeader title="찜한 포즈" />
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
