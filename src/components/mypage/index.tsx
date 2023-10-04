import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5.7rem;
  padding: 2.4rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  height: 220px;
  padding: 40px 30px 30px 30px;
  align-items: center;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    width:  100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      display: flex;
      width: 100px;
      height: 100px;
    }

    span {
      margin-top: 2rem;
      display: flex;
    }
  }
`;

export default function MyPage() {
  return (
    <Container>
      <CardContainer>
        <Link to="/mylike">
          <img src="/images/mylike.svg" alt="mylike" />
          <p>찜한 포즈</p>
        </Link>
      </CardContainer>
      <CardContainer>
        <Link to="/upload">
          <img src="/images/upload.svg" alt="upload" />
          <p>등록한 포즈</p>
        </Link>
      </CardContainer>
    </Container>
  );
}
