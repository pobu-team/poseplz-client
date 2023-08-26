import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import PoseSlider from './PoseSlider';
import makeRandomImageSrc from '../../utils/random';

import { AllPoseSelector, PoseSelector } from '../../recoil/poseState';

import Heading from './Heading';
import Banner from './Banner';
import Category from './Category';
import { COMIC_TAG, ONE_PERSON_TAG } from '../../constant/tagId';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-bottom: 16px;

  @media screen and (max-width: 340px){
    padding: 1.2rem;
  }
`;

const RoundDiv = styled.div`
  height: 20px;
  border-radius: 40px 40px 0 0;
  background-color: ${(props) => props.theme.colors.containerBackground};
`;

export default function Main() {
  const allData = useRecoilValue(AllPoseSelector);
  const recommendPoses = makeRandomImageSrc(allData, 6);
  const onePersonData = useRecoilValue(PoseSelector([ONE_PERSON_TAG]));
  const onePersonPoses = makeRandomImageSrc(onePersonData, 6);
  const funnyData = useRecoilValue(PoseSelector([COMIC_TAG]));
  const funnyPoses = makeRandomImageSrc(funnyData, 6);

  return (
    <div style={{ marginBottom: '50px' }}>
      <Container>
        <Heading />
        <Banner />
        <Category />
      </Container>
      <RoundDiv />
      <PoseSlider title="오늘의 추천 포즈에요" poseArr={recommendPoses} />
      <PoseSlider title="혼자 찍을 때 이 포즈 추천해요" poseArr={onePersonPoses} />
      <PoseSlider title="재미있게 찍고 싶다면?" poseArr={funnyPoses} />
    </div>
  );
}
