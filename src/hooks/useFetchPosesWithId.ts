import { useRecoilValue } from 'recoil';
import { PoseWithIdSelector } from '../recoil/poseState';
import { PoseType } from '../types/PoseType';

export default function useFetchPosesWithId(poseIds: string[]) {
  const poses: PoseType[] = poseIds.map((poseId) => useRecoilValue(PoseWithIdSelector(poseId)));
  return poses;
}
