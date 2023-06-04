import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import Pose from './Pose';

import { PoseSelector } from '../../recoil/poseState';

import PoseType from '../../types/PoseType';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
	padding: ${(props) => props.theme.sizes.contentPadding};

	div:first-child{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 20px;

		span {
			display: flex;
			font-size: 15px;
			border-radius: 10px;
			padding: 12px 16px;
			gap: 4px;
			margin: 6px 4px;
			color: ${(props) => props.theme.colors.text};
			background-color: ${(props) => props.theme.colors.secondary};
		}
	}
`;

const PoseContainer = styled.div`
	column-count: 2;
	column-gap: 5px;
`;

export default function SelectPose() {
  const [like, _] = useLocalStorage<string[]>('pose-store', []);

  const { id = '', theme } = useParams();
  const tagIdArr = theme?.split('&').map((tag) => tag) ?? [];
  const tagArr = [id];
  const poseArr = useRecoilValue(PoseSelector(tagIdArr));
  // const pose = useRecoilValue(RecommendPoseSelector(['31817144344412582']));
  // console.log(pose);

  if (id === 'random' && theme === 'random') {

  }

  // const filteredPoseByPerson = pose.filter((item) => (item.id === id));

  // const filteredPose: Image[][] = filterPose({ filteredPoseByPerson, themeIdArr });

  // const imageArr = new Set(filteredPose.reduce((acc, val) => acc.concat(val), []));

  // const tagArr = themeIdArr.map((item: string) => tag[item]);
  // tagArr.unshift(`${id}명`);

  return (
    <Container>
      <div>
        {tagArr.map((tag) => (
          <span key={tag}>
            #
            {tag}명
          </span>
        ))}
      </div>
      <PoseContainer>
        {poseArr.map((pose: PoseType) => {
          const fileId: string = pose.thumbnailImageUrl.split('/').pop() || '';
          const active: boolean = like.includes(fileId);
          return <Pose key={pose.poseId} imageSrc={fileId} active={active} />
        })}
      </PoseContainer>
    </Container>
  );
}
