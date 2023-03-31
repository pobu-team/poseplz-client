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
		</div>
	);
}
