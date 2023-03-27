import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

export default function HomeLayout() {
	return (
		<main>
			<Outlet />
		</main>
	);
}
