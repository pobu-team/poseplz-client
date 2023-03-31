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
    margin: 5px 0 10px 0;
`;

const Button = styled.button<ButtonProps>`
			display: flex;
      margin: 8px;
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

export default function SpecialDay() {
	const [{theme}, store] = useSelectStore();

	const specialDay = ['birthday', 'holiday', 'christmas'];

	const initialState = specialDay.reduce((obj: Record<string, boolean>, item: string) => {
		obj[item] = theme.includes(item);
		return obj;
	}, {});

	const [active, setActive] = useState(initialState);

	const handleClickDay = (special: string) => {
		if (theme.includes(special)) {
			store.removeTheme(special);
			setActive(Object.assign(active, {[special]: false}));
			return;
		}

		store.saveTheme(special);
		setActive(Object.assign(active, {[special]: true}));
	};

	return (
		<Container>
			<Button
				active ={active.birthday}
				type='button'
				onClick={() => {
					handleClickDay('birthday');
				}}
			>
				<span>🎂</span>
				<p>생일 / 기념일</p>
			</Button>
			<Button
				active ={active.holiday}
				type='button'
				onClick={() => {
					handleClickDay('holiday');
				}}
			>
				<span>👨🏻‍👩🏻‍👦🏻‍👧🏻</span>
				<p>설날 / 추석 / 가족모임</p>
			</Button>
			<Button
				active ={active.christmas}
				type='button'
				onClick={() => {
					handleClickDay('christmas');
				}}
			>
				<span>🎄</span>
				<p>크리스마스 / 연말</p>
			</Button>
		</Container>
	);
}
