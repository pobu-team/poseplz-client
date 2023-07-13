import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import TitleHeader from '../header/TitleHeader';
import useTracking from '../../hooks/useTracking';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.categoryBackground};
`;

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.myPageHeader};
`;

export default function MyPageLayout() {
  useTracking();

  return (
    <Container>
      <HeaderContainer>
        <TitleHeader title="찜한 포즈" />
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <NavigationBar />
    </Container>
  );
}
