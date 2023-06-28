import styled from 'styled-components';

import BackButton from './BackButton';
import HeaderLogo from './HeaderLogo';
import MyPageButton from './MyPageButton';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding-inline: 1.2rem;
  }
`;

export default function BackHeader() {
  return (
    <Container>
      <BackButton />
      <HeaderLogo />
    </Container>
  );
}
