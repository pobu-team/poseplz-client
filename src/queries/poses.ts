import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { apiService } from '../service/ApiService';
import { PoseInfo } from '../types/PoseType';
import { authPoseService } from '../service/AuthPoseService';

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

export const useDeletePose = () => {
  const { mutate, isSuccess: isDeleteSuccess } = useMutation({
    mutationFn: (id: string) => authPoseService.deletePose(id),
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isDeleteSuccess) {
      // eslint-disable-next-line no-unused-expressions
      pathname.includes('register') ? navigate('/main') : navigate(-1);
    }
  }, [isDeleteSuccess]);

  return mutate;
};
