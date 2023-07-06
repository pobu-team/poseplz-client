import { useState } from 'react';

import styled from 'styled-components';

import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import PersonButton from './personButton';

import Pose from '../select/Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.buttonBackground};
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100vh;
  padding: 50px;

  img {
    display: flex;
    width: 107px;
    height: 124px;
    margin-bottom: 20px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.disabledText};
    font-size: 20px;
  }
`;

const PoseContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  column-count: 2;
  column-gap: 0;
`;

export default function MyLike() {
  const [like, _] = useLocalStorage<string[]>('pose-store', []);

  const isDarkMode = useReadLocalStorage('darkMode');

  const [poseIds, setPoseIds] = useState(like);

  return (
    <Container>
      <PersonButton
        like={like}
        setIsPersonNum={setPoseIds}
      />
      {poseIds.length ? (
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
        <EmptyContainer>
          <img
            src={
              isDarkMode ? '/images/no-image-dark.png' : 'images/no-image.png'
            }
            alt="noImage"
          />
          <p>찜한 포즈가 없어요</p>
        </EmptyContainer>
      )}
    </Container>
  );
}
