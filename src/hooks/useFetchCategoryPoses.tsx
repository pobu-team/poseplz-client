import { useQuery } from '@tanstack/react-query';
import CATEGORY from '../types/CategoryType';
import { PoseInfo } from '../types/PoseType';
import { ALL_PEOPLE_TAG } from '../constant/tagId';
import { apiService } from '../service/ApiService';
import { useFetchAllPose } from '../queries/poses';

export default function useFetchCategoryPoses(
  category: CATEGORY,
  selectedTagId: string,
)
  :PoseInfo[] {
  if (category === CATEGORY.PEOPLE && selectedTagId === ALL_PEOPLE_TAG) {
    const { data } = useFetchAllPose();
    return data ?? [];
  }
  if (category === CATEGORY.PEOPLE || category === CATEGORY.THEME) {
    const { data } = useQuery({
      queryKey: ['pose', selectedTagId],
      queryFn: async () => {
        const { data: poses } = await apiService.fetchPose([selectedTagId]);
        return poses;
      },
    });
    return data ?? [];
  }
  if (category === CATEGORY.POPULAR) {
    const { data } = useQuery({
      queryKey: ['popularPoses'],
      queryFn: async () => {
        const { data: poses } = await apiService.fetchPopularPose();
        return poses;
      },
    });
    return data ?? [];
  }
  return [];
}
