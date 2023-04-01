import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

const Button = styled.button`
	display: flex;
  border: none;
	background: none;
  margin-right: 1rem;
  cursor: pointer;
`;

export default function BackButton() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	return (
		<Button onClick={() => {
			navigate(-1);
		}}>
			<img
				src={isDarkMode ? '/images/back-dark.png' : '/images/back.png'}
				alt='back'
			/>
		</Button>
	);
}
