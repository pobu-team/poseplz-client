import { useRecoilValue } from 'recoil';
import { tagGroupIdSelector } from '../recoil/poseState';
import { TagGroup } from '../types/Tag';

export default function useFetchTagGroup(tagGroupId: string): TagGroup {
  const data = useRecoilValue(tagGroupIdSelector(tagGroupId));
  return data;
}
