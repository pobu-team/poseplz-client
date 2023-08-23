import { selector, selectorFamily } from 'recoil';
import { apiService } from '../service/ApiService';
import { PoseType } from '../types/PoseType';

export const PoseSelector = selectorFamily<PoseType[], string[]>({
  key: 'PoseSelector',
  get: (tagIdArr: string[]) => async () => {
    const { data } = await apiService.fetchPose(tagIdArr);
    return data;
  },
});

export const PopularPoseSelector = selector<PoseType[]>({
  key: 'PopularPoseSelector',
  get: async () => {
    const { data } = await apiService.fetchPopularPose();
    return data;
  },
});

export const AllPoseSelector = selector<PoseType[]>({
  key: 'AllPoseSelector',
  get: async () => {
    const { data } = await apiService.fetchAllPose();
    return data;
  },
});

export const PoseWithIdSelector = selectorFamily({
  key: 'PoseWithIdSelector',
  get: (poseId?: string) => async () => {
    const { data } = await apiService.fetchPoseWithId(poseId);
    return data;
  },
});

export const tagGroupsSelector = selectorFamily({
  key: 'tagGroupsSelector',
  get: (peopleCount?: number) => async () => {
    const { data } = await apiService.fetchTagGroups(peopleCount);
    return data;
  },
});

export const tagGroupIdSelector = selectorFamily({
  key: 'tagGroupIdSelector',
  get: (tagGroupId: string) => async () => {
    const { data } = await apiService.fetchTagGroup(tagGroupId);
    return data;
  },
});

export const recommendSelector = selectorFamily({
  key: 'recommendSelector',
  get: ({ tagGroupIds, peopleCount } : {
    tagGroupIds: string[];
    peopleCount: number;
  }) => async () => {
    const { data } = await apiService.recommendPose({ tagGroupIds, peopleCount });
    return data;
  },
});
