import styled from 'styled-components';
import {useLocalStorage} from 'usehooks-ts';
import useSelectStore from '../../hooks/useSelectStore';
import type Image from '../../types/Image';
import filterPose from '../../utils/filterPose';
import moveHome from '../../utils/moveHome';
import Pose from './Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function SelectPose() {
	moveHome();

	const [like, _] = useLocalStorage<string[]>('pose-store', []);

	const [{pose, personNum, theme}] = useSelectStore();

	const filteredPoseByPerson = pose.filter(item => (item.id === personNum));

	const filteredPose: Image[][] = filterPose({filteredPoseByPerson, theme});

	const imageArr = new Set(filteredPose.reduce((acc, val) => acc.concat(val), []));

	return (
		<Container>
			{[...imageArr].map((image: Image) => {
				const active: boolean = like.includes(image.src);
				return (
					<Pose key={image.id} imageSrc={image.src} active={active}/>
				);
			})}
		</Container>
	);
}
