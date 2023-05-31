import styled from 'styled-components';

import PoseSlider from './PoseSlider';
import StartButton from './StartButton';
import makeRandomImageSrc from '../../utils/random';
import { PoseSelector, RecommendPoseSelector } from '../../recoil/poseState';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px){
    padding: 1.2rem;
  }
`;

export default function Main() {
  const allData = useRecoilValue(RecommendPoseSelector);
  const recommendPoses = makeRandomImageSrc(allData, 6);
  const onePersonData = useRecoilValue(PoseSelector(['31817144344412582']));
  const onePersonPoses = makeRandomImageSrc(onePersonData, 6)
  const funnyData = useRecoilValue(PoseSelector(['32448601534804195']));
  const funnyPoses = makeRandomImageSrc(funnyData, 6);

  return (
    <Container>
      <StartButton />
      <PoseSlider title="오늘의 추천 포즈에요!" imgArr={recommendPoses} />
      <PoseSlider title="혼자 촬영할 때는 이런 포즈!" imgArr={onePersonPoses} />
      <PoseSlider title="재미있게 찍고 싶다면?" imgArr={funnyPoses} />
    </Container>
  );
}
