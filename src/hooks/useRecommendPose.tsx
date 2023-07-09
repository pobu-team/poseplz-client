import { useRecoilValue } from 'recoil';
import { recommendSelector } from '../recoil/poseState';

export default function useRecommendPose({ tagGroupIds, peopleCount }: {
  tagGroupIds: string[];
  peopleCount: number;
}) {
  const data = useRecoilValue(recommendSelector({ tagGroupIds, peopleCount }));
  return data;
}
