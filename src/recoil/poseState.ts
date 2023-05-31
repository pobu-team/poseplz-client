import { selector, selectorFamily } from 'recoil';
import { apiService } from '../service/ApiService';

export const PoseSelector = selectorFamily({
  key: 'PoseSelector',
  get: (tagIdArr: string[]) => async () => {
    const { data } = await apiService.fetchPose(tagIdArr);
    return data;
  },
});

export const RecommendPoseSelector = selector({
  key: 'RecommendPoseSelector',
  get: async () => {
    const { data } = await apiService.fetchAllPose();
    return data;
  }
})
