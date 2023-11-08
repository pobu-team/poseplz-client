import { useQuery } from '@tanstack/react-query';
import { poseService } from '../api/poseService';

export default function useFetchAllPoses() {
  return useQuery({
    queryKey: ['allPoses'],
    queryFn: () => poseService.fetchAllPoses(),
  });
}
