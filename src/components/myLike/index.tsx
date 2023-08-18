import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import Pose from '../select/Pose';
import LogIn from './LogIn';
import PersonButton from './personButton';
import EmptyPose from '../common/EmptyPose';
import { fetchLikesSelector } from '../../recoil/likeState';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.categoryBackground};
`;

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  column-count: 2;
  column-gap: 5px;
  margin-bottom: 50px;
`;

export default function MyLike() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const initialLikePose = useRecoilValue(fetchLikesSelector(storedAccessToken));
  const [likePoseIdArr, setLikePoseIdArr] = useState(initialLikePose);
  const isLoggedIn = storedAccessToken && storedAccessToken.length > 0;

  const likePoseList = likePoseIdArr.length ? (
    <PoseContainer>
      {...likePoseIdArr.map((poseId: string) => (
        <Pose
          key={poseId}
          poseId={poseId}
          likePoseIdArr={likePoseIdArr}
          setLikePoseIdArr={setLikePoseIdArr}
        />
      ))}
    </PoseContainer>
  ) : (
    <EmptyPose text="찜한" />
  );

  return (
    <Container>
      <PersonButton
        like={initialLikePose}
        setIsPersonNum={setLikePoseIdArr}
      />
      {isLoggedIn
        ? likePoseList
        : <LogIn />}
    </Container>
  );
}
