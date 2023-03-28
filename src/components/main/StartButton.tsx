import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  margin: 20px 10px;

  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function StartButton() {
	const navigate = useNavigate();

	const handleClickStart = () => {
		navigate('/people');
	};

	return (
		<Container>
			<button type='button' onClick={handleClickStart}>
        포즈 추천 START !
			</button>
		</Container>
	);
}
