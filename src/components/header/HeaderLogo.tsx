import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Logo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 67px;
  max-height: 28px;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 67px;
    height: 28px;
    @media screen and (max-width: 340px) {
      width: 5rem;
    }
  }
`;

export default function HeaderLogo() {
  const navigate = useNavigate();

  const isDarkMode = useReadLocalStorage('darkMode');

  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <Container>
      <Logo onClick={handleClickLogo}>
        <img
          src={isDarkMode ? '/images/logo_D.svg' : '/images/logo.svg'}
          alt="logo"
        />
      </Logo>
    </Container>
  );
}
