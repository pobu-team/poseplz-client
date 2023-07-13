import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import LogoHeader from '../header/LogoHeader';
import useTracking from '../../hooks/useTracking';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function BackLayout() {
  useTracking();

  return (
    <Container>
      <LogoHeader />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
