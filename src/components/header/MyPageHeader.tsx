import styled from 'styled-components';

import BackButton from './BackButton';
import ThemeSwitch from './ThemeSwitch';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;
  background-color: ${props => props.theme.colors.background};
  padding-inline: ${props => props.theme.sizes.contentPadding};

  h1 {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 600;
  }
`;

export default function MyPageHeader() {
	return (
		<div>
			<Container>
				<BackButton />
				<h1>찜한 포즈</h1>
				<ThemeSwitch />
			</Container>
		</div>
	);
}
