import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import ScrollToTop from '../../utils/ScrollToTop';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.backgroundTertiary};
`;

export default function MyPageLayout() {
  return (
    <Container>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
