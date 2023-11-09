import { useQuery } from '@tanstack/react-query';
import CATEGORY from '../types/CategoryType';
import { PoseInfo } from '../types/PoseType';
import { ALL_PEOPLE_TAG } from '../constant/tagId';
import { poseService } from '../api/poseService';

export default function useFetchCategoryPoses(
  category: CATEGORY,
  selectedTagId: string,
)
  :PoseInfo[] {
  if (category === CATEGORY.PEOPLE && selectedTagId === ALL_PEOPLE_TAG) {
    const { data } = useQuery({ queryKey: ['allPoses'], queryFn: () => poseService.fetchAllPoses() });
    return data ?? [];
  }
  if (category === CATEGORY.PEOPLE || category === CATEGORY.THEME) {
    const { data } = useQuery({ queryKey: ['pose', selectedTagId], queryFn: () => poseService.fetchPoses([selectedTagId]) });
    return data ?? [];
  }
  if (category === CATEGORY.POPULAR) {
    const { data } = useQuery({ queryKey: ['popularPoses'], queryFn: () => poseService.fetchPopularPoses() });
    return data ?? [];
  }
  return [];
}
