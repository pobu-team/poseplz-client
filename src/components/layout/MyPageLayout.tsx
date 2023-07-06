import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function MyPageLayout() {
  return (
    <Container>
      <TitleHeader title="찜한 포즈" />
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
