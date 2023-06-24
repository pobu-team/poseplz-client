import { selector, selectorFamily } from 'recoil';
import { apiService } from '../service/ApiService';

export const PoseSelector = selectorFamily({
  key: 'PoseSelector',
  get: (tagIdArr: string[]) => async () => {
    const { data } = await apiService.fetchPose(tagIdArr);
    return data;
  },
});

export const AllPoseSelector = selector({
  key: 'AllPoseSelector',
  get: async () => {
    const { data } = await apiService.fetchAllPose();
    return data;
  },
});

export const PoseWithIdSelector = selectorFamily({
  key: 'PoseWithIdSelector',
  get: (poseId: string) => async () => {
    const { data } = await apiService.fetchPoseWithId(poseId);
    return data;
  },
});

// export const RecommendPoseSelector = selectorFamily({
//   key: 'RecommendPoseSelector',
//   get: (tagIds: string[]) => async () => {
//     const { data } = await apiService.recommendPose(tagIds);
//     return data;
//    conflict test
//   }
// })
