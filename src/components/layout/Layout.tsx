import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import MainHeader from '../header/MainHeader';

import NavigationBar from '../footer/NavigationBar';
import useTracking from '../../hooks/useTracking';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: auto;
  position: relative;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.mainBackground};
;
`;

export default function Layout() {
  useTracking();

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
