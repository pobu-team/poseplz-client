import { useLocation, useNavigate } from 'react-router';

import styled, { css } from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div<{isNotRouteMain: boolean}>`
  display: flex;
  justify-content: center;
  
  ${(props) => props.isNotRouteMain && css`
    flex: 1;
  `}
`;

const Logo = styled.button`
  display: flex;
  justify-content: center;
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
  const location = useLocation();
  const isNotRouteMain = location.pathname !== '/main';

  const handleClickLogo = () => {
    navigate('/main');
  };

  return (
    <Container isNotRouteMain={isNotRouteMain}>
      <Logo onClick={handleClickLogo}>
        <img
          src={isDarkMode ? '/images/logo_D.svg' : '/images/logo.svg'}
          alt="logo"
        />
      </Logo>
    </Container>
  );
}
