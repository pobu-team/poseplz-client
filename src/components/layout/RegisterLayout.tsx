import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TitleHeader from '../header/TitleHeader';
import FloatingHeader from '../../ui/FloatingHeader';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export default function RegisterLayout() {
  return (
    <Container>
      <FloatingHeader>
        <TitleHeader title="포즈 등록하기" />
      </FloatingHeader>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
