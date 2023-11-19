import { useQuery } from '@tanstack/react-query';
import { authPoseService } from '../service/AuthPoseService';

export default function useFetchMyPoses() {
  return useQuery({
    queryKey: ['myPoses'],
    queryFn: () => authPoseService.fetchMyPoses(),
  });
}
