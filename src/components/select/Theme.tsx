import {useState} from 'react';
import styled, {css} from 'styled-components';
import useSelectStore from '../../hooks/useSelectStore';

type ButtonProps = {
	active: boolean;
};

const Container = styled.div`
  	display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`;

const Button = styled.button<ButtonProps>`
			display: flex;
      margin: 10px;
      width: 100%;
      height: 60px;
      border: none;
			border-radius: 16px;
			background: ${props => props.theme.colors.buttonBackground};
			text-align: start;
      cursor: pointer;

      ${props => props.active && css`
				border: 3px solid ${props => props.theme.colors.border};
				background-color: ${props => props.theme.colors.background};
				background-image: url(${props => props.theme.img.check});
				background-repeat: no-repeat;
				background-position: right 10px center;
      `};

			span {
      margin: 7px;
      width: 40px;
      height: 50px;
      font-size: 30px;
			margin-right: 30px;
    }

		p {
			justify-self: center;
			align-self: center;
			font-weight: 600;
			font-size: 17px;
			color: ${props => props.theme.colors.text}
		}
`;

export default function Theme() {
	const [{theme}, store] = useSelectStore();

	const themes = ['simple', 'friendly', 'fun', 'love'];
	const initialState = themes.reduce((obj: Record<string, boolean>, item: string) => {
		obj[item] = theme.includes(item);
		return obj;
	}, {});

	const [active, setActive] = useState(initialState);

	const handleClickTheme = (themeName: string) => {
		if (theme.includes(themeName)) {
			store.removeTheme(themeName);
			setActive(Object.assign(active, {[themeName]: false}));
			return;
		}

		store.saveTheme(themeName);
		setActive(Object.assign(active, {[themeName]: true}));
	};

	return (
		<Container>
			<Button
				active={active.simple}
				type='button'
				onClick={() => {
					handleClickTheme('simple');
				}}>
				<span>📷</span>
				<p>심플한</p>
			</Button>
			<Button
				active={active.friendly}
				type='button'
				onClick={() => {
					handleClickTheme('friendly');
				}}>
				<span>🫂</span>
				<p>친근한</p>
			</Button>
			<Button
				active={active.fun}
				type='button'
				onClick={() => {
					handleClickTheme('fun');
				}}>
				<span>🤣</span>
				<p>코믹한</p>
			</Button>
			<Button
				active={active.love}
				type='button'
				onClick={() => {
					handleClickTheme('love');
				}}>
				<span>💗</span>
				<p>로맨틱한</p>
			</Button>
		</Container>
	);
}
