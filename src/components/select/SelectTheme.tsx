import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router';
import styled from 'styled-components';
import useSelectStore from '../../hooks/useSelectStore';
import SpecialDay from './SpecialDay';
import Theme from './Theme';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
		margin: 0 10px;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h2 {
		margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const SubmitBtnContainer = styled.div`
  display: flex;
  width: 100%;

  button:first-child{
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.randomButton};
    flex: 1
  }
  
  button {
    cursor: pointer;
    border-radius: 20px;
    flex: 2;
    margin: 10px;
    height: 58px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: '#000';
    background-color: ${props => props.theme.colors.border};
  }

  button:disabled {
		opacity: 0.5;
  }
`;

export default function SelectTheme() {
	const navigate = useNavigate();
	const {id = ''} = useParams();

	const [{theme}] = useSelectStore();

	const [isDisable, setIsDisable] = useState(true);
	const [isRandomDisable, setIsRandomDisable] = useState(false);

	useEffect(() => {
		if (theme.length !== 0) {
			setIsDisable(false);
			setIsRandomDisable(true);
		}

		if (theme.length === 0) {
			setIsDisable(true);
			setIsRandomDisable(false);
		}
	});

	const themeUrl = theme.join('&');

	const handleClickRandom = () => {
		navigate(`/pose/${id}/random`);
	};

	return (
		<Container>
			<h1>원하시는 테마를 선택해주세요</h1>
			<h2>특별한 날 이신가요?</h2>
			<SpecialDay />
			<h2>이런 분위기로 찍고싶어!</h2>
			<Theme />
			<SubmitBtnContainer>
				<button
					type='button'
					onClick={handleClickRandom}
					disabled={isRandomDisable}
				>랜덤</button>
				<button
					type='button'
					onClick={() => {
						navigate(`/pose/${id}/${themeUrl}`);
					}}
					disabled={isDisable}
				>다음</button>
			</SubmitBtnContainer>
		</Container>
	);
}
