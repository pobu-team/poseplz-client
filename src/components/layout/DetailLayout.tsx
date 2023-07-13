import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.detailBackground};
  width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function DetailLayout() {
  return (
    <Container>
      <TitleHeader title="이 포즈로 사진을 찍어보세요!" />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
