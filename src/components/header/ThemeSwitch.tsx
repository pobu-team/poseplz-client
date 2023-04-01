import styled, {css} from 'styled-components';

import {useLocalStorage} from 'usehooks-ts';

type ToggleButtonProps = {
	active: boolean;
};

const Container = styled.div`
  display: flex;
  align-items: ceneter;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  padding-block: 0.1em;
  padding-inline: .1em;
  width: 60px;
  border: 0;
  border-radius: 2em;
  color: #FFFFFF;
  background-color: #EAEAF2;
  cursor: pointer;

  img:first-of-type {
    padding: .3em 0.3em;
    border-radius: 3em;
    color: #000000;
    background-color: #FFFFFF;
    transition: .1s;
  }
  img:last-of-type {
    padding: .3em 0.3em;
    border-radius: 3em;
    transition: .1s;
  }
  
  ${props => props.active && css`
    background-color: #3A3A3A;
    img:first-of-type {
      color: #FFFFFF;
      background-color: transparent;
    }
    img:last-of-type {
      background-color: #FFFFFF;
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
				<img src='/images/light.png' alt='light'/>
				<img src='/images/dark.png' alt='dark'/>
			</ToggleButton>
		</Container>
	);
}
