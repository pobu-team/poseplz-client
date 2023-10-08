import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import EmptyPose from '../../common/EmptyPose';
import PoseList from '../../common/PoseList';
import useFetchLikeList from '../../../hooks/useFetchLikeList';
import { myPoseSelector } from '../../../recoil/registerState';
import LogIn from '../myLike/LogIn';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-block: 5.7rem;
`;

const EmptyPoseContainer = styled.div`
  margin-top: 5.7rem;
`;

export default function Upload() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  if (!storedAccessToken) {
    return (
      <LogIn />
    );
  }
  const likePoseIdArr = useFetchLikeList();
  const filteredPoses = useRecoilValue(myPoseSelector(storedAccessToken));

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
  return (
    <EmptyPoseContainer>
      <EmptyPose text="등록한" />
    </EmptyPoseContainer>
  );
}
