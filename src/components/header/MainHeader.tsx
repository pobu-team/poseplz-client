import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import MyPageButton from './MyPageButton';
import ThemeSwitch from './ThemeSwitch';

const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding-inline: 1.2rem;
  }
`;

export default function MainHeader() {
  return (
    <Container>
      <ThemeSwitch />
      <HeaderLogo />
      <MyPageButton />
    </Container>
  );
}
