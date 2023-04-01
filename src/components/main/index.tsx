import styled from 'styled-components';

import MostSharedPose from './MostSharedPose';
import PopularPose from './PopularPose';
import StartButton from './StartButton';

const Container = styled.div`
	padding: ${props => props.theme.sizes.contentPadding};
`;

export default function Main() {
	return (
		<Container>
			<StartButton />
			<MostSharedPose />
			<PopularPose />
		</Container>
	);
}
