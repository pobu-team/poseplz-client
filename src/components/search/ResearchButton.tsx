import styled from 'styled-components';
import ReplayIcon from '../svg/ReplayIcon';

const Button = styled.button`
    cursor: pointer;
    
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;

    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    
    width: 160px;
    height: 36px;
    border-radius: 20px;

    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.text};
`;

function ResearchButton() {
  return (
    <Button type="button">
      <ReplayIcon width={24} height={24} color="white" />
      현 지도에서 검색
    </Button>
  );
}

export default ResearchButton;
