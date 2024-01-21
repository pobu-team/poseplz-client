import styled from 'styled-components';

const TabButton = styled.button<{active: boolean}>`
  width: 50%;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 600;
  color:${(props) => (props.active ? props.theme.colors.text : props.theme.colors.textAlternative)};
  padding-block: 1.2rem;
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.colors.text : 'transparent')};
  cursor: pointer;
`;

interface PoseTabProps {
  isShowingRegisteredPoses: boolean,
  toggleTab: () => void
}

function PoseTab({ isShowingRegisteredPoses, toggleTab }: PoseTabProps) {
  return (
    <div>
      <TabButton active={isShowingRegisteredPoses} onClick={toggleTab}>
        등록한 포즈
      </TabButton>
      <TabButton active={!isShowingRegisteredPoses} onClick={toggleTab}>
        찜한 포즈
      </TabButton>
    </div>
  );
}

export default PoseTab;
