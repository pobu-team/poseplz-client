import styled from 'styled-components';

export const PoseContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.colors.detailBackground};

  div {
    display: flex;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 488px;
    background-color: ${(props) => props.theme.colors.detailButton};
    
    img {
      max-width: 300px;
      max-height: 600px;
      padding: 24px;
      display: flex;
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      border-radius: 16px;
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    width: 180px;
    padding: 0;
    height: 60px;
    margin: 24px 0;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.detailButton};

    @media screen and (max-width: 340px) {
      font-size: 13px;
      height: 50px;
    }
    
    svg {
      margin-right: 10px;
    }
  }

  button:last-child {
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.primary};
    margin-left: 1.2rem;
  }
`;

export const TagButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-block: 1.6rem;
  flex-wrap: wrap;
`;
