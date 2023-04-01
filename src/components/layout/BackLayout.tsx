import {Outlet} from 'react-router-dom';

import styled from 'styled-components';

import BackHeader from '../header/BackHeader';

const Container = styled.div`
	width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
  height: 50vh;
  max-height: fit-content;
`;

export default function BackLayout() {
	return (
		<Container>
			<BackHeader />
			<main>
				<Outlet />
			</main>
		</Container>
	);
}
