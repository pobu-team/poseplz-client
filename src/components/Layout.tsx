import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.sizes.layoutWidth};
  background: ${props => props.theme.colors.layoutBackground};
`;

export default function Layout() {
	return (
		<Container>
			<main>
				<Outlet />
			</main>
		</Container>
	);
}
