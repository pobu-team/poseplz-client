import { useQuery } from '@tanstack/react-query';
import { apiService } from '../service/ApiService';
import { PoseInfo } from '../types/PoseType';

export const useFetchPoses = (tagIds: string[], page?: number) => useQuery({
  queryKey: ['fetchPose', ...tagIds],
  queryFn: async () => {
    const { data, pagination } = await apiService.fetchPose(tagIds, page);
    return { data, pagination };
  },
});

export const useFetchAllPose = () => useQuery<PoseInfo[]>({
  queryKey: ['fetchAllPose'],
  queryFn: async () => {
    const { data } = await apiService.fetchAllPose();
    return data;
  },
});
