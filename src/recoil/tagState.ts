import { atom, selector } from 'recoil';
import { apiService } from '../service/ApiService';

// export const TagState = atom<number[]>({
//   key: 'TagState',
//   default: [],
// });

export const TagSelector = selector({
  key: 'TagSelector',
  get: async () => {
    const { data } = await apiService.fetchTags();
    return data;
  },
});
