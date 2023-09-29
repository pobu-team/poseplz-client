import styled from 'styled-components';

export const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 20px;
    @media screen and (max-width: 340px){
      font-size: 18px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 16px;
  width: 100%;
  margin-bottom: 30px;
`;

export const SubmitBtnContainer = styled.div`
  display: flex;
  bottom: 0;
  position: sticky;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  margin-bottom: 15px;

  button {
    border-radius: 10px;
    height: 58px;
    padding: 0px;
    margin-block: 1rem;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: '#000';
    
    @media screen and (max-width: 340px){
      font-size: 16px;
    }
  }

  button:first-child {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.startButton};
    flex: 2;
    margin-right: 5px;
  }

  button:last-child {
    cursor: pointer;
    flex: 1.5;
    margin-left: 5px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.border};
  }

  button:disabled {
    opacity: 0.5;
  }
`;
