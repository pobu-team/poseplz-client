import styled from 'styled-components';

import PoseSlider from './PoseSlider';
import StartButton from './StartButton';
import makeRandomImageSrc from '../../utils/random';

const Container = styled.div`
	padding: ${props => props.theme.sizes.contentPadding};
`;

export default function Main() {
	const recommendPoses = makeRandomImageSrc();
	const mostSharedPoses = makeRandomImageSrc();
	return (
		<Container>
			<StartButton />
			<PoseSlider title='오늘의 추천 포즈에요!' imgArr={recommendPoses} />
			<PoseSlider title='500명 이상이 저장했어요!' imgArr={mostSharedPoses} />
		</Container>
	);
}
