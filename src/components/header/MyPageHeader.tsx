import styled from 'styled-components';

import BackButton from './BackButton';

const Container = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  padding-block: 1rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding-inline: 1.2rem;
  }
  h1 {
    width: 100%;
    justify-content: center;
    line-height: 1.4;
    letter-spacing: -.3px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex: 1;
  }
`;

export default function MyPageHeader() {
  return (
    <Container>
      <BackButton />
      <h1>
        찜한 포즈
      </h1>
    </Container>
  );
}
