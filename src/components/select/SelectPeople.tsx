import 'reflect-metadata';

import {useState} from 'react';
import {useNavigate} from 'react-router';
import styled, {css} from 'styled-components';
import useSelectStore from '../../hooks/useSelectStore';

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

    button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      
      p {
        display: flex;
        font-size: 70px;
      }
      &:disabled {
        color: lightgray;
      }
    }
  }
`;

const Button = styled.button`
    margin-top: 10px;
    display: flex;
    width: 350px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: '#000';
    background-color: ${props => props.theme.colors.primary};
    
    &:disabled {
    color: gray;
  }
`;

export default function SelectPeople() {
	const navigate = useNavigate();

	const [, store] = useSelectStore();

	const [isBtnDisabled, setIsBtnDisabled] = useState([false, false, false, false, false, false]);
	const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

	const handleClickPersonNum = (number: number) => {
		store.savePersonNum(String(number));

		if (isBtnDisabled.includes(true)) {
			setIsBtnDisabled(new Array(6).fill(false));
			setIsNextBtnDisabled(true);
			return;
		}

		let isBtnDisabledCopy = [...isBtnDisabled];
		isBtnDisabledCopy = isBtnDisabledCopy.map((_, index) => (index !== number - 1));
		setIsBtnDisabled(isBtnDisabledCopy);
		setIsNextBtnDisabled(false);
		console.log(isBtnDisabledCopy);
	};

	const iconArr = ['🙋🏻‍♀️', '👨🏻‍🤝‍👩🏻', '👩🏻‍🧑🏻‍👧🏻', '👨🏻‍👩🏻‍👦🏻‍👧🏻', '', ''];

	return (
		<Container>
			<h1>몇 명이서 오셨나요?</h1>
			<div>
				{[1, 2, 3, 4, 5, 6].map((item, index) => (
					<button
						type='button' key={item}
						onClick={() => {
							handleClickPersonNum(item);
						}}
						disabled={isBtnDisabled[index]}
					>
						<p>{iconArr[index]}</p>
						{item}명
					</button>
				))}
			</div>
			<Button type='button'
				onClick={() => {
					navigate('/theme');
				}}
				disabled={isNextBtnDisabled}
			>다음</Button>
		</Container>
	);
}
