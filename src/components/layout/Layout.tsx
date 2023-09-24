import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../header/MainHeader';
import NavigationBar from '../footer/NavigationBar';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  margin: auto;
  position: relative;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export default function Layout() {
  return (
    <Container>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
