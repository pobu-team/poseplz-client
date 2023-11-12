import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 375px;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
`;

export default function FloatingHeader({ children }:{children:React.ReactNode}) {
  return (
    <HeaderContainer>{children}</HeaderContainer>
  );
}
