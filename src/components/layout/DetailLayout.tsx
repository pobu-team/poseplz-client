import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
`;

export default function DetailLayout({ option }: {option:string}) {
  return (
    <Container>
      {
        option === 'DETAIL'
          ? <TitleHeader title="이 포즈로 사진을 찍어보세요!" />
          : <TitleHeader title="포즈가 등록되었어요." backButton="/main" />
      }
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
