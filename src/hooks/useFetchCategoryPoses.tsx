import { useRecoilValue } from 'recoil';
import { AllPoseSelector, PopularPoseSelector, PoseSelector } from '../recoil/poseState';
import CATEGORY from '../types/CategoryType';
import { PoseInfo } from '../types/PoseType';
import { ALL_PEOPLE_TAG } from '../constant/tagId';

export default function useFetchCategoryPoses(
  category: CATEGORY,
  selectedTagId: string,
)
  :PoseInfo[] {
  if (category === CATEGORY.PEOPLE && selectedTagId === ALL_PEOPLE_TAG) {
    return useRecoilValue(AllPoseSelector);
  }
  if (category === CATEGORY.PEOPLE) {
    return useRecoilValue(PoseSelector([selectedTagId]));
  }
  if (category === CATEGORY.THEME) {
    return useRecoilValue(PoseSelector([selectedTagId]));
  }
  if (category === CATEGORY.POPULAR) {
    return useRecoilValue(PopularPoseSelector);
  }
  return [];
}
