import { useQuery } from '@tanstack/react-query';
import photoBoothService from '../../service/PhotoBoothService';
import { PhotoBoothRequest } from '../../types/PhotoBooth';

const useFetchPhotoBooth = ({ params }: { params: PhotoBoothRequest }) => useQuery({
  queryKey: ['photoBooth'],
  queryFn: () => photoBoothService.fetchPhotoBooths({ params }),
});

export default useFetchPhotoBooth;
