import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {useReadLocalStorage} from 'usehooks-ts';
import moveHome from '../../utils/moveHome';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;
  background-color: ${props => props.theme.colors.background};
  padding-inline: ${props => props.theme.sizes.contentPadding};

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 1rem;
  }

  h1 {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  padding-bottom: 20px;

  button {
    margin: 4px;
    border-radius: 10px;
    width: 80px;
    height: 40px;
    border: none;
    background-color: ${props => props.theme.colors.buttonBackground};
  }
`;

export default function MyPageHeader() {
	moveHome();

	const navigate = useNavigate();
	const isDarkMode = useReadLocalStorage('darkMode');

	return (
		<div>
			<Container>
				<button onClick={() => {
					navigate('/pose');
				}}>
					<img src={isDarkMode ? '/images/back-dark.png' : '/images/back.png'} alt='back' />
				</button>
				<h1>찜한 포즈</h1>
			</Container>
			<ButtonContainer>
				{[1, 2, 3, 4, 5, 6].map(item => (
					<button key={item} type='button'>
						{item}명
					</button>
				))}
			</ButtonContainer>
		</div>
	);
}
