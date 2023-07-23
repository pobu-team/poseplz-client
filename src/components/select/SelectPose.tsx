import React from 'react';

import styled from 'styled-components';

import { useParams } from 'react-router';

import { useRecoilValue } from 'recoil';
import { PoseSelector } from '../../recoil/poseState';

import PoseList from '../common/PoseList';
import EmptyPose from '../common/EmptyPose';

import useRecommendPose from '../../hooks/useRecommendPose';
import useFetchTagGroup from '../../hooks/useFetchTagGroup';
import Loading from '../common/Loading';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.contentPadding};

  div:first-child {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;

    span {
      display: flex;
      font-size: 15px;
      border-radius: 10px;
      padding: 12px 16px;
      gap: 4px;
      margin: 6px 4px;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const EmptyPoseContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export default function SelectPose() {
  let poseArr;
  let tagArr = [''];

  const { id = '', theme = '' } = useParams();
  const allTagData = useFetchTagGroup(theme);

  if (id === 'random') {
    const tagGroupIds = allTagData.tags.map((tag) => (tag.tagId));
    poseArr = useRecoilValue(PoseSelector(tagGroupIds));
    tagArr = [allTagData.name];
  }
  if (id !== 'random') {
    poseArr = useRecommendPose({ tagGroupIds: [theme], peopleCount: Number(id) });
    tagArr = [`${id}인`, allTagData.name];
  }

  return (
    <Container>
      <div>
        {tagArr.map((tag) => (
          <span key={tag}>
            #
            {tag}
          </span>
        ))}
      </div>
      {poseArr.length ? (
        <React.Suspense fallback={<Loading />}>
          <PoseList poses={poseArr} />
        </React.Suspense>

      ) : (
        <EmptyPoseContainer>
          <EmptyPose text="추천된" />
        </EmptyPoseContainer>
      )}
    </Container>
  );
}
