import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../footer/NavigationBar';
import TopButton from '../../ui/TopButton';
import TitleHeader from '../header/TitleHeader';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  min-height: 100vh;
  max-height: fit-content;
  position: relative;
`;

export default function SelectResultLayout() {
  return (
    <Container>
      <TitleHeader title="포즈 추천 결과에요" />
      <main>
        <Outlet />
      </main>
      <TopButton />
      <NavigationBar />
    </Container>
  );
}
