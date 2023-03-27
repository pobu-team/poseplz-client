import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import ThemeSwitch from './ThemeButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  padding-inline: ${props => props.theme.sizes.contentPadding};
`;

const Logo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  width: 200px;
  height: 50px;
  border: none;
  background: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
`;

const MyPageButton = styled.button`
  display: flex;
  width: 45px;
  height: 45px;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50px;
  cursor: pointer;
`;
export default function Header() {
	const navigate = useNavigate();

	const handleClickLogo = () => {
		navigate('/');
	};

	const handleClickMyPage = () => {
		navigate('/mypage');
	};

	return (
		<Container>
			<ThemeSwitch />
			<Logo onClick={handleClickLogo}>포즈를 부탁해!</Logo>
			<MyPageButton onClick={handleClickMyPage}>
        My
			</MyPageButton>
		</Container>
	);
}
