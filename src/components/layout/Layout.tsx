import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import MainHeader from '../header/MainHeader';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function Layout() {
  return (
    <Container>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
