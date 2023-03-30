import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';

const Container = styled.div`
	width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  height: 50vh;
  max-height: fit-content;
`;

export default function Layout() {
	return (
		<Container>
			<Header />
			<main>
				<Outlet />
			</main>
		</Container>
	);
}
