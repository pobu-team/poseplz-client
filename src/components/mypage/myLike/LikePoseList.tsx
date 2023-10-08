import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AllPoseSelector, PoseSelector } from '../../../recoil/poseState';
import EmptyPose from '../../common/EmptyPose';
import PoseList from '../../common/PoseList';
import { ALL_PEOPLE_TAG } from '../../../constant/tagId';
import useFetchLikeList from '../../../hooks/useFetchLikeList';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  padding-bottom: 8rem;
`;

export default function LikePoseList({ selectedTagId }: {selectedTagId: string}) {
  const likePoseIdArr = useFetchLikeList();

  const poses = selectedTagId === ALL_PEOPLE_TAG
    ? useRecoilValue(AllPoseSelector)
    : useRecoilValue(PoseSelector([selectedTagId]));
  const filteredPoses = poses.filter(
    (pose) => likePoseIdArr.includes(pose.poseId),
  );

  if (filteredPoses.length > 0) {
    return (
      <Container>
        <PoseList
          poses={filteredPoses}
          likePoseIdArr={likePoseIdArr}
        />
      </Container>
    );
  }
  return <EmptyPose text="찜한" />;
}
