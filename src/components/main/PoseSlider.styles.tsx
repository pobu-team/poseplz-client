import styled from 'styled-components';

export const Container = styled.div`
  height: 29rem;
  margin-top: 1.5rem;
  align-items: center;
  max-width: 1200px;
  cursor: grab;
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
  height: 100%;
  width: auto;
  align-items: center;
  white-space: nowrap;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: none;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
  
  button {
    height: 100%;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    
    // 스켈레톤 UI
    div {
      width: 18rem;
      height: 100%;
      margin-right: 5px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.1);
    }
    img {
      height: 100%;
      border-radius: 8px;
      width: auto;
      margin-right: 2px;
    }
  }
`;
