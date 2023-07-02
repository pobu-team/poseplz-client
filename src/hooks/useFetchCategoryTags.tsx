import { useRecoilValue } from 'recoil';
import { AtmosphereTagSelector, PeopleTagSelector } from '../recoil/tagState';
import CATEGORY from '../types/CategoryType';
import { Tag } from '../types/Tag';

export default function useFetchCategoryTags(category:CATEGORY): Tag[] {
  if (category === CATEGORY.PEOPLE) {
    return useRecoilValue(PeopleTagSelector);
  }
  if (category === CATEGORY.THEME) {
    return useRecoilValue(AtmosphereTagSelector);
  }
  return [];
}
