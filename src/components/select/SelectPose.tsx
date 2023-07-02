import styled from 'styled-components';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { AllPoseSelector, PoseSelector } from '../../recoil/poseState';
import PoseList from '../common/PoseList';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.contentPadding};

  div:first-child {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;

    span {
      display: flex;
      font-size: 15px;
      border-radius: 10px;
      padding: 12px 16px;
      gap: 4px;
      margin: 6px 4px;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default function SelectPose() {
  let poseArr;
  let tagArr;

  const { id = '', theme } = useParams();
  if (id === 'random') {
    poseArr = useRecoilValue(AllPoseSelector);
    tagArr = ['1~6'];
  } else {
    const tagIdArr = theme?.split('&').map((tag) => tag) ?? [];
    tagArr = [id];
    poseArr = useRecoilValue(PoseSelector(tagIdArr));
  }

  return (
    <Container>
      <div>
        {tagArr.map((tag) => (
          <span key={tag}>
            #
            {tag}
            명
          </span>
        ))}
      </div>
      <PoseList poses={poseArr} />
    </Container>
  );
}
