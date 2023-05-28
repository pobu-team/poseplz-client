import styled from 'styled-components';

import BackButton from './BackButton';

const Container = styled.h1`
    line-height: 1.4;
    letter-spacing: -.3px;
    font-size: 18px;
    font-weight: 700;
    position: -webkit-sticky;
    position: sticky;
    display: block;
    z-index: 10;
    top: 0;
    left: 0;
    padding: 12px 0;
    width: 100%;
    height: 50px;
    text-align: center;

  button {
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
  }
`;

export default function MyPageHeader() {
  
  return (
    <Container>
      <BackButton />
      찜한 포즈
    </Container>
  );
}
