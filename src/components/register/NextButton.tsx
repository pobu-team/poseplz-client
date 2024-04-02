import React from 'react';
import styled from 'styled-components';

interface NextButtonProps {
  active: boolean;
  handleOnClick: () => void;
  children: React.ReactNode;
}

const Button = styled.button<{active: boolean}>`
  width: 32.7rem;
  height: 5.6rem;
  position: fixed;
  bottom: 20px;
  padding: 1.6rem 3.2rem 1.6rem 3.2rem;
  border-radius: 10px;
  border: none;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.4rem;
  cursor: pointer;
  color: ${(props) => (props.active ? props.theme.colors.reverseText : props.theme.colors.textAlternative)};
  background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.backgroundTertiary)};
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
`;

export default function NextButton({ active, handleOnClick, children }:NextButtonProps) {
  return (
    <Button active={active} onClick={handleOnClick}>
      {children}
    </Button>
  );
}
