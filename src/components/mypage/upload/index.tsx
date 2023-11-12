import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import EmptyPose from '../../common/EmptyPose';
import PoseList from '../../common/PoseList';
import useFetchLikeList from '../../../hooks/useFetchLikeList';
import LogIn from '../myLike/LogIn';
import useFetchMyPoses from '../../../hooks/useFetchMyPoses';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-block: 5.7rem;
`;

const EmptyPoseContainer = styled.div`
  padding-top: 5.7rem;
`;

export default function Upload() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  if (!storedAccessToken) {
    return (
      <LogIn />
    );
  }
  const likePoseIdArr = useFetchLikeList();
  const { isLoading, data: filteredPoses } = useFetchMyPoses();

  if (!isLoading && filteredPoses && filteredPoses.length > 0) {
    return (
      <Container>
        <PoseList
          poses={filteredPoses}
          likePoseIdArr={likePoseIdArr}
        />
      </Container>
    );
  }
  return (
    <EmptyPoseContainer>
      <EmptyPose text="등록한" />
    </EmptyPoseContainer>
  );
}
