import styled, {css} from 'styled-components';

import {useLocalStorage} from 'usehooks-ts';

type ToggleButtonProps = {
	active: boolean;
};

const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  border: none;
  background: none;
  max-width: 72px;
  max-height: 36px;
  padding: 0;
  margin: 0;
  cursor: pointer;

	img {
		@media screen and (max-width: 340px) {
			width: 5rem;
		}
	}
`;

export default function ThemeSwitch() {
	const [isDarkMode, setThemeMode] = useLocalStorage('darkMode', false);

	const toggleTheme = () => {
		setThemeMode(!isDarkMode);
	};

	return (
		<Container>
			<ToggleButton onClick={toggleTheme} active= {isDarkMode}>
				<img src={isDarkMode ? '/images/toggle_dark.svg' : '/images/toggle_light.svg'} alt='light'/>
			</ToggleButton>
		</Container>
	);
}
