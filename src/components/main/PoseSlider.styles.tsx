import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  margin: 0 0 20px 0;
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
  margin-top: 30px;
  
    h1 {
      font-size: 2.4rem;
      text-overflow: ellipsis;
      font-weight: 600;
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
  
  a {
    height: 90%;
    cursor: pointer;

    img {
      height: 100%;
      border-radius: 8px;
      width: auto;
      margin: 2px;
    }
  }
`;
