import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {useReadLocalStorage} from 'usehooks-ts';

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

   h2 {
    margin: 20px auto;
    font-size: 20px;
    font-weight: 600;
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
  margin: 0 auto;
  cursor: pointer;

  img {
    width: fit-content;
    height: fit-content;
  }
`;

export default function BackHeader() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	const handleClickLogo = () => {
		navigate('/');
	};

	return (
		<Container>
			<button onClick={() => {
				navigate('/pose');
			}}>
				<img src={isDarkMode ? '/images/back-dark.png' : '/images/back.png'} alt='back' />
			</button>
			<h2>이 포즈로 사진을 찍어보세요 !</h2>
			{/* <Logo onClick={handleClickLogo}>
				<img src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-small.png'} alt='logo'/>
			</Logo> */}
		</Container>
	);
}
