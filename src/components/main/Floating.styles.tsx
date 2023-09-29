import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 12rem;
  height: 5.6rem;
  right: 16px;
`;

export const FloatingButton = styled.button<{isShowingToast: boolean}>`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
  bottom: 8.2rem;
  border-radius: 100px;
  border: none;
  background: ${(props) => props.theme.colors.primary};

  ${(props) => props.isShowingToast && css`
    background: ${props.theme.colors.text};
  `}
`;

export const ToastContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 15rem;
  border-radius: 30px;
  border: none;
`;

export const ToastButton = styled.button`
  cursor: pointer;
  width: auto;
  height: 5.6rem;
  padding: 1.3rem 1.6rem;
  border-radius: 100px;
  background: white;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    display: flex;
  }
`;

export const Text = styled.text`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 26px;
  color: #000;
`;
