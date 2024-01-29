import styled from 'styled-components';
import useFetchLikeList from '../../hooks/useFetchLikeList';
import useFetchMyPoses from '../../hooks/useFetchMyPoses';
import PoseList from '../common/PoseList';
import EmptyPose from '../common/EmptyPose';

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
`;

function RegisteredPoseList() {
  const likePoseIdArr = useFetchLikeList();
  const { isLoading, data: filteredPoses } = useFetchMyPoses();

  if (!isLoading && filteredPoses && filteredPoses.length > 0) {
    return (
      <PoseContainer>
        <PoseList
          poses={filteredPoses}
          likePoseIdArr={likePoseIdArr}
        />
      </PoseContainer>
    );
  }

  return (
    <EmptyPose text="등록한" />
  );
}

export default RegisteredPoseList;
