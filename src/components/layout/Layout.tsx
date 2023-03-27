import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';

const Container = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.sizes.layoutWidth};
  background: ${props => props.theme.colors.layoutBackground};
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
