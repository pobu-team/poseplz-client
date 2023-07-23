import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100vh;
  margin: auto;
  
  div{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export default function Loading() {
  return (
    <Container>
      <div>
        <img src="/images/loading.gif" alt="loading" />
      </div>
    </Container>
  );
}
