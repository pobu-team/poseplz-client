import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 60px 60px 0px 60px;
    font-size: 2.4rem;
    cursor: pointer;
    padding: 40px;
    border: 2px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.startButton};

    @media screen and (max-width: 340px) {
        padding: 30px;
      }

    span {
      display: flex;
      font-weight: bold;
      color: ${(props) => props.theme.colors.text};
      
      @media screen and (max-width: 340px) {
          font-size: 0.7em;
      }
    }

    img {
      @media screen and (max-width: 340px) {
          width: 50px;
          height: 50px;
      }
    }
  }
  
  @media screen and (max-width: 340px) {
          height: 100px;
  }
`;
