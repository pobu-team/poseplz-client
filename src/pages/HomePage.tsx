import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 10em 10em;
  padding-inline: ${props => props.theme.sizes.contentPadding};
`;

const Logo = styled.h1`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 1em;
`;

const StartButton = styled.button`
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
`;

export default function HomePage() {
	const navigate = useNavigate();

	const handleClickStart = () => {
		navigate('/main');
	};

	return (
		<Container>
			<Logo>
        포즈를 부탁해!
			</Logo>
			<StartButton
				onClick={handleClickStart}
			>포즈 추천받으러 가기</StartButton>
		</Container>
	);
}
