import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AllPoseSelector } from '../../../recoil/poseState';
import EmptyPose from '../../common/EmptyPose';
import PoseList from '../../common/PoseList';
import { ALL_PEOPLE_TAG } from '../../../constant/tagId';
import useFetchLikeList from '../../../hooks/useFetchLikeList';
import { useFetchPoses } from '../../../queries/poses';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  padding-bottom: 8rem;
`;

export default function LikePoseList({ selectedTagId }: {selectedTagId: string}) {
  const likePoseIdArr = useFetchLikeList();
  const { data } = useFetchPoses([selectedTagId]);

  const poses = selectedTagId === ALL_PEOPLE_TAG
    ? useRecoilValue(AllPoseSelector)
    : data?.data;
  const filteredPoses = poses && poses.filter(
    (pose) => likePoseIdArr.includes(pose.poseId),
  );

  if (filteredPoses && filteredPoses.length > 0) {
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
