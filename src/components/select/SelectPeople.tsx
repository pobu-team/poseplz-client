import {useState} from 'react';

import {useNavigate} from 'react-router';

import styled, {css} from 'styled-components';

import useSelectStore from '../../hooks/useSelectStore';

type PersonButtonProps = {
	active: boolean;
	index: number;
};

const Container = styled.div`
  padding: ${props => props.theme.sizes.contentPadding};
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8em;
    font-weight: bold;
    letter-spacing: -0.67px;
    line-height: 1.36;
    margin-bottom: 32px;
  }
  
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    width: 100%;
  }

  @media screen and (max-width: 300px){
      font-size: 13px;
    }
  
`;

const PersonButton = styled.button<PersonButtonProps>`
    padding: 30px 25px 15px;
    margin-bottom: 16px;
    width: 100%;
    border-radius: 16px;
    border: none;
    font-size: 1.1em;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.buttonBackground};
    cursor: pointer;

    
    ${props => props.active && css`
    border: 3px solid ${props.theme.colors.primary};
    background-color: ${props.theme.colors.background};
    `};
    
    img {
      width: 100%;
      margin-bottom: 15px;
    };

    ${props => props.index === 1 && css`
      padding: 25px 40px 15px;
      img {
        margin-bottom: 25px;
      }
    `};

    ${props => props.index >= 5 && css`
      img{
        margin-bottom: 5px;
      }  
    `};
`;

const NextButton = styled.button`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 2.6em;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
  color: '#000';
  background-color: ${props => props.theme.colors.primary};
  
  &:disabled {
    opacity: 0.5;
  }
`;

export default function SelectPeople() {
	const navigate = useNavigate();

	const [,store] = useSelectStore();

	console.log(store.personNum);

	const [_, setIsNextBtnDisabled] = useState(true);

	const handleClickPersonNum = (number: number) => {
		store.savePersonNum(String(number));
		setIsNextBtnDisabled(false);
	};

	return (
		<Container>
			<h1>몇 명이서 오셨나요?</h1>
			<div>
				{[1, 2, 3, 4, 5, 6].map((item, index) => (
					<PersonButton
						type='button'
						key={item}
						index={item}
						onClick={() => {
							handleClickPersonNum(item);
						}}
						active={store.personNum === String(item)}
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
				disabled={store.personNum === ''}
			>다음</NextButton>
		</Container>
	);
}
