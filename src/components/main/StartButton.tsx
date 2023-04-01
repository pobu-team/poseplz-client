import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

import useSelectStore from '../../hooks/useSelectStore';

const Container = styled.div`
  height: 100px;
  margin: 5px 10px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 60px 60px 0px 60px;
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
    text-align: start;
    padding: 30px;
    border: 2px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.startButton};

    span {
      display: flex;
      color: ${props => props.theme.colors.text}
    }

    img {
      display: flex;
      width: 50px;
      height: 50px;
      padding: 15px;
      background-color: ${props => props.theme.colors.arrowBackground};
      border-radius: 50px;
    }
  }
`;

export default function StartButton() {
	const navigate = useNavigate();

	const [, store] = useSelectStore();

	const handleClickStart = () => {
		navigate('/people');
		store.resetTheme();
		store.resetPersonNum();
	};

	return (
		<Container>
			<button type='button' onClick={handleClickStart}>
				<span>포즈 추천 Go!</span>
				<img src='/images/arrow.png' alt='arrow'/>
			</button>
		</Container>
	);
}
