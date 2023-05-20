import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

const Container = styled.div`
	flex: 1;
	justify-content: flex-start;
`

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
		<Container>
			<Button onClick={() => {
				navigate(-1);
			}}>
				<img
					src={isDarkMode ? '/images/icon_back_D.svg' : '/images/icon_back_L.svg'}
					alt='back'
					/>
			</Button>
		</Container>
	);
}
