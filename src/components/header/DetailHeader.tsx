import styled from 'styled-components';

import BackButton from './BackButton';

const Container = styled.header`
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

  h1 {
    width: 100%;
    justify-content: center;
    line-height: 1.4;
    letter-spacing: -.3px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex: 1;
    padding: 12px 0;

    @media screen and (max-width: 340px) {
      font-size: 18px;
      padding: 0;
    }
  }
`;

export default function MyPageHeader() {
  return (
    <Container>
      <BackButton />
      <h1>
        이 포즈로 사진을 찍어보세요!
      </h1>
    </Container>
  );
}
