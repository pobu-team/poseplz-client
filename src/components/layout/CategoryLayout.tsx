import { Outlet, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import TitleHeader from '../header/TitleHeader';
import TopButton from '../../ui/TopButton';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  margin: auto;
  position: relative;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.backgroundTertiary};
`;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 375px;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

export default function Layout() {
  const isPeople = useMatch('/category/people');
  const isTheme = useMatch('/category/theme');
  // eslint-disable-next-line no-nested-ternary
  const categoryTitle = isPeople ? '인원별 포즈' : isTheme ? '테마별 포즈' : '인기 포즈';

  return (
    <Container>
      <HeaderContainer>
        <TitleHeader title={categoryTitle} />
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <TopButton />
      <NavigationBar />
    </Container>
  );
}
