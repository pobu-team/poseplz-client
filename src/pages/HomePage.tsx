import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: ${props => props.theme.sizes.contentPadding};
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8em 10em 18em 2em;  
    justify-content: flex-start;
    align-items: flex-start;
    
    h1 {
      display: flex;
      flex-wrap: wrap;
      font-size: 64px;
      margin-bottom: 40px;
      color: ${props => props.theme.colors.text};
    }
  
    p {
      width: 170px;
      line-height: 28px;
      font-size: 16px;
      color: ${props => props.theme.colors.text};
    }

    strong {
      display: flex;
      font-weight: 900;
    }
  }
`;

const Logo = styled.p`
  display: flex;
  margin-bottom: 3em;
  width: 100%;
  justify-content: flex-end;

  img {
    width: 130px;
  }
`;

const StartButton = styled.button`
  display: flex;
  width: 100%;
  height: 80px;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
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
			<div>
				<h1><strong>포</strong>즈를 <strong>부</strong>탁해</h1>
				<p>색다를 추억을 간직하고픈 당신을 위한 인생 포즈 추천</p>
			</div>
			<Logo>
				<img src='/images/logo-big.png' alt='logo' />
			</Logo>
			<StartButton onClick={handleClickStart}>
      포즈 추천받으러 가기
			</StartButton>
		</Container>
	);
}
