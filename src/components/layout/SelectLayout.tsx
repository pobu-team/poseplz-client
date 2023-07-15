import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LogoHeader from '../header/LogoHeader';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function SelectLayout() {
  return (
    <Container>
      <LogoHeader />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
