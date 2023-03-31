import styled from 'styled-components';
import {useLocalStorage} from 'usehooks-ts';
import Pose from '../select/Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
	padding: 20px 0;
	background-color: ${props => props.theme.colors.buttonBackground};
`;

const PoseContainer = styled.div`
	column-count: 2;
	column-gap: 0;
`;

const EmptyContainer = styled.div`
  width: 100%;
	max-width: 430px;
	margin: auto;
  min-height: 100vh;
	background-color: ${props => props.theme.colors.background};
`;

const Pharagraph = styled.p`
  display: flex;
	padding-top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export default function MyLike() {
	const [selectedPose, _] = useLocalStorage<string[]>('pose-store', []);

	if (!selectedPose.length) {
		return (
			<EmptyContainer>
				<Pharagraph>저장한 포즈가 없어요!</Pharagraph>
			</EmptyContainer>
		);
	}

	return (
		<Container>
			<PoseContainer>
				{...selectedPose.map(imageSrc => {
					const active: boolean = selectedPose.includes(imageSrc);
					return (
						<Pose key={imageSrc} imageSrc={imageSrc} active={active}/>
					);
				})}
			</PoseContainer>
		</Container>
	);
}
