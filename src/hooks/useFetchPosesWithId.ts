import { useRecoilValue } from 'recoil';
import { PoseWithIdSelector } from '../recoil/poseState';
import { PoseInfo } from '../types/PoseType';

export default function useFetchPosesWithId(poseIds: string[]) {
  const poses: PoseInfo[] = poseIds.map((poseId) => useRecoilValue(PoseWithIdSelector(poseId)));
  return poses;
}
