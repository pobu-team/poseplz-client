import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BackdropBox = styled.div<{color: string}>`
  position: fixed;
  z-index:50;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
`;

interface BackdropProps {
  handleClose: () => void;
  color?: string;
}

export default function Backdrop({ handleClose, color = 'transparent' } : BackdropProps) {
  return (
    <>
      { ReactDOM.createPortal(
        <BackdropBox onClick={handleClose} color={color} />,
        document.getElementById('backdrop-root') as Element,
      )}
    </>
  );
}
