import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 67px;
  max-height: 28px;
  border: none;
  background: none;
  cursor: pointer;

  img {
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
