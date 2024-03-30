import {
  ReactNode, SetStateAction, useCallback, useState, Dispatch, useRef,
  MouseEventHandler,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import SnackbarItem from './SnackbarItem';

const SNACKBAR_DURATION = 3000;
type SnackbarStatus = 'open' | 'close' | null;

export type Snackbar = {
  children: ReactNode;
  status: SnackbarStatus;
  setStatus: Dispatch<SetStateAction<SnackbarStatus>>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
};

const SnackbarItemStyle = styled.div`
  div {
    position: fixed;
    color: ${({ theme }) => theme.colors.message};
    font-size: 18px;
    line-height: 26px;
    bottom: 40px;
    max-width: 328px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
    padding: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  
  .enter {
    animation: enter 300ms ease-out forwards;
  }
  .show {
    transform: translateY(0);
    opacity: 1;
  }
  .exit {
    animation: exit 300ms ease-out forwards;
  }
  
  @keyframes enter {
    0% {
      transform: translate(0, 50px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  @keyframes exit {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(0, 50px);
      opacity: 0;
    }
  }
  `;

const useSnackbar = (children: ReactNode) => {
  const timeoutId = useRef<number | null>(null);
  const [status, setStatus] = useState<SnackbarStatus>(null);

  const openSnackbar = useCallback(() => {
    setStatus('open');
    timeoutId.current = window.setTimeout(() => setStatus('close'), SNACKBAR_DURATION);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
  };
  const handleMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      setStatus('close');
    }, SNACKBAR_DURATION);
  };

  return {
    snackbar: status
      ? createPortal(
        <SnackbarItemStyle>
          <SnackbarItem
            status={status}
            setStatus={setStatus}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </SnackbarItem>
        </SnackbarItemStyle>,
          document.querySelector('#snackbarRoot')!,
      )
      : null,
    open: openSnackbar,
  };
};

export default useSnackbar;
