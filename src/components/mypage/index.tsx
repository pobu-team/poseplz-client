import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
import LogIn from './LogIn';
import LikePoseList from './LikePoseList';
import { ALL_PEOPLE_TAG } from '../../constant/tagId';
import PoseTab from './PoseTab';
import UserProfile from './UserProfile';
import RegisteredPoseList from './RegisteredPoseList';

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const ProfileSection = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  max-width: 375px;
`;

const PoseSection = styled.div`
  padding-top: 14.8rem;
  padding-bottom: 7rem;
`;

export default function MyPage() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  if (!storedAccessToken) {
    return <LogIn />;
  }

  const [isShowingRegisteredPoses, setIsShowingRegisteredPoses] = useState(true);

  return (
    <Container>
      <ProfileSection>
        <UserProfile />
        <PoseTab
          isShowingRegisteredPoses={isShowingRegisteredPoses}
          toggleTab={() => setIsShowingRegisteredPoses((prev) => !prev)}
        />
      </ProfileSection>
      <PoseSection>
        {!isShowingRegisteredPoses
          ? <LikePoseList selectedTagId={ALL_PEOPLE_TAG} />
          : <RegisteredPoseList />}
      </PoseSection>
    </Container>
  );
}
