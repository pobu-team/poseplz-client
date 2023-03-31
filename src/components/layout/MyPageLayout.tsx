import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from '../header/MyPageHeader';

const Container = styled.div`
	width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  height: 50vh;
  max-height: fit-content;
`;

export default function MyPageLayout() {
	return (
		<Container>
			<MyPageHeader />
			<main>
				<Outlet />
			</main>
		</Container>
	);
}
