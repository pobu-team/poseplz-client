import { useRecoilValue } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import { fetchLikesSelector } from '../../recoil/likeState';
import { AllPoseSelector, PoseSelector } from '../../recoil/poseState';
import EmptyPose from '../common/EmptyPose';
import PoseList from '../common/PoseList';
import { ALL_PEOPLE_TAG } from '../../constant/tagId';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  padding-bottom: 8rem;
`;

export default function LikePoseList({ selectedTagId }: {selectedTagId: string}) {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const likePoseIdArr = useRecoilValue(fetchLikesSelector(storedAccessToken));
  const poses = selectedTagId === ALL_PEOPLE_TAG
    ? useRecoilValue(AllPoseSelector)
    : useRecoilValue(PoseSelector([selectedTagId]));
  const filteredPoses = poses.filter(
    (pose) => likePoseIdArr.includes(pose.poseId),
  );

  if (filteredPoses.length > 0) {
    return (
      <Container>
        <PoseList poses={filteredPoses} />
      </Container>
    );
  }
  return <EmptyPose text="찜한" />;
}
