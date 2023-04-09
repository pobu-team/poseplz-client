import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

import useSelectStore from '../../hooks/useSelectStore';

const Container = styled.div`
  height: 120px;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 60px 60px 0px 60px;
    font-size: 2.4rem;
    cursor: pointer;
    padding: 40px;
    border: 2px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.startButton};

    @media screen and (max-width: 340px) {
        padding: 30px;
      }

    span {
      display: flex;
      font-weight: bold;
      color: ${props => props.theme.colors.text};
      
      @media screen and (max-width: 340px) {
          font-size: 0.7em;
      }
    }

    img {
      @media screen and (max-width: 340px) {
          width: 50px;
          height: 50px;
      }
    }
  }
  
  @media screen and (max-width: 340px) {
          height: 100px;
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
				<img src='/images/btn_start.svg' alt='arrow'/>
			</button>
		</Container>
	);
}
