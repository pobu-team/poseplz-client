import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import DetailHeader from '../header/DetailHeader';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.detailBackground};
	width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  height: 50vh;
  max-height: fit-content;
`;

export default function DetailLayout() {
  return (
    <Container>
      <DetailHeader />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
