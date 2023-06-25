import { selector } from 'recoil';
import { apiService } from '../service/ApiService';

const CountSelector = selector({
  key: 'CountSelector',
  get: async () => {
    const { data } = await apiService.fetchCount();
    return data.count;
  },
});

export default CountSelector;
