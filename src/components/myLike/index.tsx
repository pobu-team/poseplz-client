import { useState } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { useRecoilValue } from 'recoil';

import PersonButton from './personButton';
import Pose from '../select/Pose';
import EmptyPose from '../common/EmptyPose';
import { isLoggedInAtom } from '../../recoil/loginState';
import LogIn from './LogIn';

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
  const [like, _] = useLocalStorage<string[]>('pose-store', []);
  const [poseIds, setPoseIds] = useState(like);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const likePoseList = poseIds.length ? (
    <PoseContainer>
      {...poseIds.map((poseId: string) => {
        const active: boolean = like.includes(poseId);
        return (
          <Pose
            key={poseId}
            poseId={poseId}
            active={active}
          />
        );
      })}
    </PoseContainer>
  ) : (
    <EmptyPose text="찜한" />
  );

  return (
    <Container>
      <PersonButton
        like={like}
        setIsPersonNum={setPoseIds}
      />
      {isLoggedIn
        ? likePoseList
        : <LogIn />}
    </Container>
  );
}
