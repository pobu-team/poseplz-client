import styled, {css} from 'styled-components';

import {useLocalStorage} from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  align-items: ceneter;
`;

type ToggleButtonProps = {
	active: boolean;
};

const ToggleButton = styled.button<ToggleButtonProps>`
  padding-block: 0.5em;
  padding-inline: .1em;
  border: 0;
  border-radius: 2em;
  color: #FFFFFF;
  background-color: #5f5f5f;
  cursor: pointer;

  span:first-of-type {
    padding: .3em 0.3em;
    border-radius: 3em;
    color: #000000;
    background-color: #FFFFFF;
    transition: .1s;
  }
  span:last-of-type {
    padding: .3em 0.3em;
    border-radius: 3em;
    transition: .1s;
  }
  
  ${props => props.active && css`
    background-color: #3A3A3A;
    span:first-of-type {
      color: #FFFFFF;
      background-color: transparent;
    }
    span:last-of-type {
      background-color: #1E1E1E;
    }
  `}
`;

export default function ThemeSwitch() {
	const [isDarkMode, setThemeMode] = useLocalStorage('darkMode', false);

	const toggleTheme = () => {
		setThemeMode(!isDarkMode);
	};

	return (
		<Container>
			<ToggleButton onClick={toggleTheme} active= {isDarkMode}>
				<span>Light</span>
				<span>Dark</span>
			</ToggleButton>
		</Container>
	);
}
