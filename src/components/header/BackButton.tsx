import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  
  div {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    padding: 8px 11px;

    img {
      display: flex;
    }
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  max-width: 32px;
  max-height: 32px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export default function BackButton() {
  const navigate = useNavigate();

  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <Container>
      <Button onClick={() => {
        navigate(-1);
      }}
      >
        <div>
          <img
            src={isDarkMode ? '/images/icon_back_D.svg' : '/images/icon_back_L.svg'}
            alt="back"
          />
        </div>
      </Button>
    </Container>
  );
}
