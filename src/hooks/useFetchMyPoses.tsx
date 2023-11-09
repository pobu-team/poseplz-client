import { useQuery } from '@tanstack/react-query';
import { authPoseService } from '../api/authPoseService';

export default function useFetchMyPoses() {
  return useQuery({
    queryKey: ['myPoses'],
    queryFn: () => authPoseService.fetchMyPoses(),
  });
}
