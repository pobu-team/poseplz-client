import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderLogo from './HeaderLogo';
import InstagramLogo from './InstagramLogo';

const Container = styled.header<{scroll: boolean}>`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.3rem;
  background-color: ${(props) => props.theme.colors.background};
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding-inline: 1.2rem;
  }

  ${(props) => props.scroll && css`
    background-color: ${(prop) => prop.theme.colors.mainBackground};
  `}
`;

export default function MainHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <Container scroll={scrollPosition < 30}>
      <HeaderLogo />
      <InstagramLogo />
    </Container>
  );
}
