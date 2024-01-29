import { useQuery } from '@tanstack/react-query';
import { useReadLocalStorage } from 'usehooks-ts';
import logInApiService from '../service/LogInApiService';

export default function useFetchMyInfo() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;

  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => logInApiService.getMemberInfo(storedAccessToken),
  });
}
