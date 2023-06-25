import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  max-width: 1200px;
  overflow: scroll;
  cursor: grab;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
    h1 {
      font-size: 2.4rem;
      text-overflow: ellipsis;
      letter-spacing: -0.48px;
      font-weight: bold;
      @media screen and (max-width: 340px) {
        font-size: 1.8rem;
      }
    }
`;

export const Content = styled.div`
  height: 300px;
  width: auto;
  align-items: center;
  white-space: nowrap;
  display: flex;
  overflow: scroll;
  scroll-snap-type: none;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
  
  button {
    height: 90%;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    img {
      height: 100%;
      border-radius: 8px;
      width: auto;
      margin: 2px;
    }
  }
`;
