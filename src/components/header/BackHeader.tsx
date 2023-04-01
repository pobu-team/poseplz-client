import styled from 'styled-components';

import BackButton from './BackButton';
import HeaderLogo from './HeaderLogo';
import MyPageButton from './MyPageButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  padding-inline: ${props => props.theme.sizes.contentPadding};
`;

export default function BackHeader() {
	return (
		<Container>
			<BackButton />
			<HeaderLogo />
			<MyPageButton />
		</Container>
	);
}
