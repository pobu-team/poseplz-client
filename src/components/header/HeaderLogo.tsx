import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

const Logo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 67px;
  max-height: 28px;
  border: none;
  background: none;
	margin-right: 20px;
  cursor: pointer;

	@media screen and (max-width: 340px) {
    margin-right: 0;
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
				src={isDarkMode ? '/images/logo_D.svg' : '/images/logo.svg'}
				alt='logo'
			/>
		</Logo>
	);
}
