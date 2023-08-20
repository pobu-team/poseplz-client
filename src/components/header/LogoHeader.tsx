import styled from 'styled-components';

import BackButton from './BackButton';
import HeaderLogo from './HeaderLogo';

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding-inline: 1.2rem;
  }
`;

export default function LogoHeader() {
  return (
    <Container>
      <BackButton />
      <HeaderLogo />
    </Container>
  );
}
