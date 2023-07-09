import { useRecoilValue } from 'recoil';
import { tagGroupsSelector } from '../recoil/poseState';

export default function useFetchTagGroups(id?: number) {
  const data = useRecoilValue(tagGroupsSelector(Number(id)));

  const themeObj = [...data].reduce((acc, cur) => {
    acc[cur.name] = cur.tagGroupId;
    return acc;
  }, {});

  return { themeObj };
}
