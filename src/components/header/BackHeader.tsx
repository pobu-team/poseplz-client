import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {useReadLocalStorage} from 'usehooks-ts';
import ThemeSwitch from './ThemeButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  padding-inline: ${props => props.theme.sizes.contentPadding};

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const Logo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: fit-content;
    height: fit-content;
  }
`;

const MyPageButton = styled.button`
  display: flex;
  width: 45px;
  height: 45px;
  border: 2px solid ${props => props.theme.colors.text};
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 50px;
  cursor: pointer;
`;
export default function BackHeader() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	const handleClickLogo = () => {
		navigate('/');
	};

	const handleClickMyPage = () => {
		navigate('/mypage');
	};

	return (
		<Container>
			<button onClick={() => {
				navigate('/pose');
			}}>
				<img src='/images/back.png' alt='back' />
			</button>
			<Logo onClick={handleClickLogo}>
				<img src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-small.png'} alt='logo'/>
			</Logo>
			<MyPageButton onClick={handleClickMyPage}>
				<img src={isDarkMode ? '/images/mybutton-dark.png' : '/images/mybutton.png'} />
			</MyPageButton>
		</Container>
	);
}
