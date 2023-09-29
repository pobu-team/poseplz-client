import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import PoseSlider from './PoseSlider';
import makeRandomImageSrc from '../../utils/random';

import { AllPoseSelector } from '../../recoil/poseState';

import Heading from './Heading';
import Category from './Category';
import PoseList from '../common/PoseList';

import useFetchPosesWithId from '../../hooks/useFetchPosesWithId';
import useFetchLikeList from '../../hooks/useFetchLikeList';

import PoseContainerTitle from './PoseContainerTitle';
import Floating from './Floating';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-bottom: 16px;
  position: relative;

  @media screen and (max-width: 340px) {
    padding: 1.2rem;
  }
`;

const RoundDiv = styled.div`
  height: 20px;
  border-radius: 40px 40px 0 0;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

const PoseListContainer = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  padding-top: 3.2rem;
  background: ${(props) => props.theme.colors.containerBackground};
`;

const DivideLine = styled.div`
  width: 100%;
  height: 12px;
  background: ${(props) => props.theme.colors.divideLineBackground};
`;

export default function Main() {
  const allData = useRecoilValue(AllPoseSelector);
  const ramdomPoses = makeRandomImageSrc(allData, 30);
  const mostWatchPoses = ramdomPoses.slice(0, 6);
  const todayRecommendPoseIds = ramdomPoses.slice(7);
  const todayRecommendPoses = useFetchPosesWithId(todayRecommendPoseIds);
  const likePoseIdArr = useFetchLikeList();

  return (
    <div style={{ marginBottom: '75px' }}>
      <Container>
        <Heading />
        <Category />
      </Container>
      <RoundDiv />
      <PoseSlider title="가장 많이 본 포즈에요" poseArr={mostWatchPoses} />
      <DivideLine />
      <PoseListContainer>
        <PoseContainerTitle title="오늘의 추천 포즈에요" />
        <PoseList poses={todayRecommendPoses} likePoseIdArr={likePoseIdArr} />
      </PoseListContainer>
      <Floating />
    </div>
  );
}
