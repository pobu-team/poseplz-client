import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 29rem;
  margin-top: 1.5rem;
  align-items: center;
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
`;

export const PoseButton = styled.button<{active: boolean, height: number, width: number}>`
    height: 100%;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    img {
      height: 100%;
      aspect-ratio: ${(props) => `${props.width}/${props.height}`};
      margin-right: 2px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.1);
      
    ${(props) => props.active && css`
        height: 100%;
        width: auto;
        aspect-ratio: initial;
        border-radius: 8px;
        margin-right: 2px;
    `}
    }
`;
