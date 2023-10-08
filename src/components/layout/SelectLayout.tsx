import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function SelectLayout() {
  return (
    <Container>
      <TitleHeader title="포즈 추천" />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
