import {useNavigate} from 'react-router';

import styled from 'styled-components';

import {useReadLocalStorage} from 'usehooks-ts';

const Container = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
	max-width: 36px;
	max-height: 36px;
	padding: 0;
	border: none;
  border-radius: 50px;
  cursor: pointer;

	img {
		@media screen and (max-width: 340px) {
			width: 2.5rem;
		}
	}
`;

export default function MyPageButton() {
	const navigate = useNavigate();

	const isDarkMode = useReadLocalStorage('darkMode');

	const handleClickMyPage = () => {
		navigate('/mypage');
	};

	return (
		<Container>
			<Button onClick={handleClickMyPage}>
				<img src={isDarkMode ? '/images/icon_mylike_D.svg' : '/images/icon_mylike_L.svg'} />
			</Button>
		</Container>
	);
}
