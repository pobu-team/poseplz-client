import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

const Button = styled.button`
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

export default function MyPageButton() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	const handleClickMyPage = () => {
		navigate('/mypage');
	};

	return (
		<Button onClick={handleClickMyPage}>
			<img src={isDarkMode ? '/images/mybutton-dark.png' : '/images/mybutton.png'} />
		</Button>
	);
}
