import {useState} from 'react';

import {useNavigate} from 'react-router';

import styled, {css} from 'styled-components';

import useSelectStore from '../../hooks/useSelectStore';

type PersonButtonProps = {
	active: boolean;
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    align-self: flex-start;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

const PersonButton = styled.button<PersonButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 8px;
    padding: 20px;
    width: 156px;
    height: 180px;
    border-radius: 16px;
    border: none;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.buttonBackground};
    cursor: pointer;

    ${props => props.active && css`
    border: 3px solid ${props.theme.colors.primary};
    background-color: ${props.theme.colors.background};
  `};

  &:disabled {
    opacity: 0.5;
  }

  img {
    width: 100%;
    padding: 10px;
    height: auto;
  }
`;

const NextButton = styled.button`
  margin-top: 10px;
  display: flex;
  width: 350px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  color: '#000';
  background-color: ${props => props.theme.colors.primary};
  
  &:disabled {
    opacity: 0.5;
  }
`;

export default function SelectPeople() {
	const navigate = useNavigate();

	const [, store] = useSelectStore();

	const initialState: Record<number, boolean> = {};
	for (let i = 1; i <= 6; i++) {
		initialState[i] = false;
	}

	const [active, setActive] = useState(initialState);

	const [isBtnDisabled, setIsBtnDisabled] = useState([false, false, false, false, false, false]);

	const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

	const handleClickPersonNum = (number: number) => {
		store.savePersonNum(String(number));

		if (active[number]) {
			setActive(Object.assign(active, {[number]: false}));
			setIsBtnDisabled(new Array(6).fill(false));
			setIsNextBtnDisabled(true);
			return;
		}

		let newBtnState = [...isBtnDisabled];
		newBtnState = newBtnState.map((_, index) => (index !== number - 1));
		setIsBtnDisabled(newBtnState);
		setActive(Object.assign(active, {[number]: true}));
		setIsNextBtnDisabled(false);
	};

	return (
		<Container>
			<h1>몇 명이서 오셨나요?</h1>
			<div>
				{[1, 2, 3, 4, 5, 6].map((item, index) => (
					<PersonButton
						type='button' key={item}
						onClick={() => {
							handleClickPersonNum(item);
						}}
						active={active[item]}
						disabled={isBtnDisabled[index]}
					>
						<img src={`/images/person-${index + 1}.png`} alt='person'/>
						{item}명
					</PersonButton>
				))}
			</div>
			<NextButton type='button'
				onClick={() => {
					navigate('/theme');
				}}
				disabled={isNextBtnDisabled}
			>다음</NextButton>
		</Container>
	);
}
