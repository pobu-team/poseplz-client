import { atom, selectorFamily } from 'recoil';
import { apiService } from '../service/ApiService';

export const imgAtom = atom({
  key: 'imgAtom',
  default: '',
});

export const imgFileAtom = atom({
  key: 'imgFileAtom',
  default: { name: '' },
});

export const myPoseSelector = selectorFamily({
  key: 'myPoseSelector',
  get: (token: string) => async () => {
    const { data } = await apiService.fetchMyPoses(token);
    return data;
  },
});
