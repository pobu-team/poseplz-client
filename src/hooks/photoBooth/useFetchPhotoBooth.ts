import { useQuery } from '@tanstack/react-query';
import photoBoothService from '../../service/PhotoBoothService';

const useFetchPhotoBooth = () => useQuery({
  queryKey: ['photoBooth'],
  queryFn: () => photoBoothService.fetchPhotoBooths(),
});

export default useFetchPhotoBooth;
