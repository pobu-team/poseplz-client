import { useNavigate } from 'react-router-dom';

import useSelectStore from '../../hooks/useSelectStore';

import { Container } from './StartButton.styles';

export default function StartButton() {
  const navigate = useNavigate();

  const [, store] = useSelectStore();

  const handleClickStart = () => {
    store.resetTheme();
    navigate('/people');
  };

  return (
    <Container>
      <button type="button" onClick={handleClickStart}>
        <span>포즈 추천 Go!</span>
        <img src="/images/btn_start.svg" alt="arrow" />
      </button>
    </Container>
  );
}
