import styled from 'styled-components';

import BackButton from './BackButton';

const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes.smallContentPadding};

  h1 {
    width: 100%;
    justify-content: center;
    line-height: 1.4;
    letter-spacing: -.3px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex: 1;

    @media screen and (max-width: 340px) {
      font-size: 18px;
    }
  }
`;

export default function TitleHeader({ title }: {
  title: string
}) {
  return (
    <Container>
      <BackButton />
      <h1>{title}</h1>
    </Container>
  );
}
