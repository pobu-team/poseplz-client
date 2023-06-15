import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 16px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    margin: 0 10px;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h2 {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const SubmitBtnContainer = styled.div`
  display: flex;
  width: 100%;

  button {
    border-radius: 10px;
    height: 58px;
    padding: 0px;
    border: none;
    font-size: 20px;
    font-weight: 600;
  }

  button:first-child {
    cursor: pointer;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.randomButton};
    flex: 2;
    margin-right: 5px;
  }

  button:last-child {
    cursor: pointer;
    flex: 1.5;
    margin-left: 5px;
    color: "#000";
    background-color: ${(props) => props.theme.colors.border};
  }

  button:disabled {
    opacity: 0.5;
  }
`;
