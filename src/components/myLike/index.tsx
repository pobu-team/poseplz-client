import styled from 'styled-components';
import {useLocalStorage} from 'usehooks-ts';
import Pose from '../select/Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Pharagraph = styled.p`
  display: flex;
  margin-top: 300px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export default function MyLike() {
	const [selectedPose, _] = useLocalStorage<string[]>('pose-store', []);

	if (!selectedPose.length) {
		return (
			<Pharagraph>저장한 포즈가 없어요!</Pharagraph>
		);
	}

	return (
		<Container>
		{...selectedPose.map(imageSrc => {
			const active: boolean = selectedPose.includes(imageSrc);
			return (
				<Pose key={imageSrc} imageSrc={imageSrc} active={active}/>
			);
		})}
		</Container>
	);
}
