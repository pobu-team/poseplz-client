import {useState} from 'react';

import styled from 'styled-components';

import {useLocalStorage, useReadLocalStorage} from 'usehooks-ts';

import PersonButton from './personButton';
import Pose from '../select/Pose';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
	background-color: ${props => props.theme.colors.buttonBackground};
`;

const EmptyContainer = styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		padding: 50px;

		img {
			display: flex;
			padding: 100px;
		}
		
		p {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
		}
`;

const PoseContainer = styled.div`
	column-count: 2;
	column-gap: 0;
	margin-top: 20px;
`;

export default function MyLike() {
	const [selectedPose, _] = useLocalStorage<string[]>('pose-store', []);

	const isDarkMode = useReadLocalStorage('darkMode');

	const [personNum, setIsPersonNum] = useState(selectedPose);

	return (
		<Container>
			<PersonButton selectedPose={selectedPose} setIsPersonNum={setIsPersonNum}/>
			{personNum.length
				? (<PoseContainer>
				{...personNum.map(imageSrc => {
					const active: boolean = selectedPose.includes(imageSrc);
					return (
						<Pose key={imageSrc} imageSrc={imageSrc} active={active}/>
					);
				})}
				</PoseContainer>)
				: (<EmptyContainer>
					<img
						src={isDarkMode ? '/images/no-image-dark.png' : 'images/no-image.png'}
						alt='noImage'
					/>
					<p>찜한 포즈가 없어요</p>
				</EmptyContainer>
				)}
		</Container>
	);
}
