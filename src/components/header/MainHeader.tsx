import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import MyPageButton from './MyPageButton';
import ThemeSwitch from './ThemeSwitch';

const Container = styled.div`
  display: flex;
	width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  padding-inline: ${props => props.theme.sizes.contentPadding};
`;

export default function MainHeader() {
	return (
		<Container>
			<ThemeSwitch />
			<HeaderLogo />
			<MyPageButton />
		</Container>
	);
}
