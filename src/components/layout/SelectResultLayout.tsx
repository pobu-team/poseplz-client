import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LogoHeader from '../header/LogoHeader';
import NavigationBar from '../footer/NavigationBar';
import TopButton from '../../ui/TopButton';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  position: relative;
`;

export default function SelectResultLayout() {
  return (
    <Container>
      <LogoHeader />
      <main>
        <Outlet />
      </main>
      <TopButton />
      <NavigationBar />
    </Container>
  );
}
