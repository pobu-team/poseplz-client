import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

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

export default function HeaderLogo() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	const handleClickLogo = () => {
		navigate('/');
	};

	return (
		<Logo onClick={handleClickLogo}>
			<img
				src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-small.png'}
				alt='logo'
			/>
		</Logo>
	);
}
