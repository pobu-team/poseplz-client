import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import PoseSlider from './PoseSlider';

import { AllPoseSelector } from '../../recoil/poseState';

import Heading from './Heading';
import Category from './Category';
import PoseList from '../common/PoseList';

import useFetchPosesWithId from '../../hooks/useFetchPosesWithId';
import useFetchLikeList from '../../hooks/useFetchLikeList';

import PoseContainerTitle from './PoseContainerTitle';
import Floating from './Floating';
import LoginModal from '../../ui/LoginModal';
import { isLogInModalShowingAtom } from '../../recoil/loginState';

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
  background: ${(props) => props.theme.colors.backgroundTertiary};
`;

export default function Main() {
  // 모든 데이터를 불러온다.
  const allData = useRecoilValue(AllPoseSelector);
  const recentData = [...allData].reverse();
  // 21-26번째 포즈 아이디를 추출한다.(좋아요를 누를 때 리렌더링 방지 위해 데이터 고정)
  const randomPoses = recentData.slice(20, 26);
  const ramdomPoseIds = randomPoses.map((item) => item.poseId);
  // 최신 포즈 20개의 아이디를 추출하고, 포즈 데이터를 불러온다.
  const recentPoses = recentData.slice(0, 20);
  const recentRandomPoseIds = recentPoses.map((item) => item.poseId);
  const recentRandomPoses = useFetchPosesWithId(recentRandomPoseIds);

  const likePoseIdArr = useFetchLikeList();

  const isLogInModalShowing = useRecoilValue(isLogInModalShowingAtom);
  return (
    <div style={{ marginBottom: '75px' }}>
      <Container>
        <Heading />
        <Category />
      </Container>
      <RoundDiv />
      <PoseSlider title="오늘의 추천 포즈에요" poseArr={ramdomPoseIds} />
      <DivideLine />
      <PoseListContainer>
        <PoseContainerTitle title="최근 올라온 포즈에요" />
        <PoseList poses={recentRandomPoses} likePoseIdArr={likePoseIdArr} />
      </PoseListContainer>
      <Floating />
      {isLogInModalShowing && <LoginModal />}
    </div>
  );
}
