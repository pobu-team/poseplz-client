import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
  max-width: 430px;
  margin: auto;
  min-height: 100vh;
	padding: 110px 20px 150px;
  height: 50vh;
  max-height: fit-content;
`;

export default function HomeLayout() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
