import styled from 'styled-components';
import {useLocalStorage} from 'usehooks-ts';
import {tag} from '../../constant/tag';
import useSelectStore from '../../hooks/useSelectStore';
import type Image from '../../types/Image';
import filterPose from '../../utils/filterPose';
import moveHome from '../../utils/moveHome';
import Pose from './Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

	div:first-child{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 20px;

		span {
			display: flex;
			font-size: 15px;
			border-radius: 10px;
			padding: 8px 14px;
			gap: 4px;
			margin: 6px 4px;
			color: ${props => props.theme.colors.black};
			background-color: ${props => props.theme.colors.secondary};
		}
	}
`;

const PoseContainer = styled.div`
	column-count: 2;
	column-gap: 5px;
`;

export default function SelectPose() {
	moveHome();

	const [like, _] = useLocalStorage<string[]>('pose-store', []);

	const [{pose, personNum, theme}] = useSelectStore();

	const filteredPoseByPerson = pose.filter(item => (item.id === personNum));

	const filteredPose: Image[][] = filterPose({filteredPoseByPerson, theme});

	const imageArr = new Set(filteredPose.reduce((acc, val) => acc.concat(val), []));

	const tagArr = theme.map((item: string) => tag[item]);
	tagArr.unshift(personNum + '명');

	return (
		<Container>
			<div>
				{tagArr.map((tag: string) => (
					<span key={tag}>#{tag}</span>
				))}
			</div>
			<PoseContainer>
				{[...imageArr].map((image: Image) => {
					const active: boolean = like.includes(image.src);
					return (
						<Pose key={image.id} imageSrc={image.src} active={active}/>
					);
				})}
			</PoseContainer>
		</Container>
	);
}
