import useFetchLikeList from '../../hooks/useFetchLikeList';
import { PoseInfo } from '../../types/PoseType';
import LikeButton from '../select/LikeButton';
import { PoseContainer } from './PoseDetail.styles';

export default function PoseImage({ poseInfo } : {poseInfo: PoseInfo}) {
  const likePoseIdArr = useFetchLikeList();

  return (
    <PoseContainer>
      <div>
        <img src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
      </div>
      <LikeButton
        likePoseIdArr={likePoseIdArr}
        poseId={poseInfo.poseId}
        type="DETAIL"
      />
    </PoseContainer>
  );
}
