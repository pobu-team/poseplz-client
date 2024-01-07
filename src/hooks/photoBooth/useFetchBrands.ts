import { useQuery } from '@tanstack/react-query';
import photoBoothService from '../../service/PhotoBoothService';
import { Brand } from '../../types/PhotoBooth';

const useFetchBrands = () => useQuery<Brand[]>({
  queryKey: ['brands'],
  queryFn: async () => {
    const { data } = await photoBoothService.fetchBrands();
    return data;
  },
});

export default useFetchBrands;
