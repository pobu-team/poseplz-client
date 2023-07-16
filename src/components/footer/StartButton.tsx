import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import addGaEvent from '../../utils/addGaEvent';

const ButtonContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    text-align: center;
    background-color: ${(props) => props.theme.colors.containerBackground};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    img {
      display: flex;
    }
  }
`;

export default function StartButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isResult = location.pathname.startsWith('/pose/');

  const handleButtonClick = () => {
    navigate('/people');
    const eventName = isResult ? 'GNB Recommend again' : 'GNB Pose Recommend';
    addGaEvent(eventName);
  };

  return (
    <ButtonContainer>
      <button type="button" onClick={handleButtonClick}>
        <img src={isResult ? '/images/btn_poserestart.svg' : '/images/btn_posestart.svg'} alt="포즈 추천" />
      </button>
    </ButtonContainer>
  );
}
