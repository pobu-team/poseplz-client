import styled, { css } from 'styled-components';

const Container = styled.div<{rotate: boolean}>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  ${(props) => props.rotate && css`
    transform: rotate(45deg);
  `}
`;

export default function FloatingPlusButton(isShowingToast: boolean) {
  return (
    <Container rotate={isShowingToast}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M12.5 2L12.5 22" stroke="black" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M2.5 12L22.5 12" stroke="black" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </Container>
  );
}
