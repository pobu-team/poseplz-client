import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavermapsProvider } from 'react-naver-maps';
import NavigationBar from '../footer/NavigationBar';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export default function SearchLayout() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID as string}
    >
      <Container>
        <main>
          <Outlet />
        </main>
        <NavigationBar />
      </Container>
    </NavermapsProvider>
  );
}
