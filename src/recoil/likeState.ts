import { selectorFamily } from 'recoil';
import likeApiService from '../service/LikeApiService';
import { LikedPose } from '../types/LikePose';

export const addLikeSelector = selectorFamily({
  key: 'AddLikeSelector',
  get: ({ poseId, token } : {
    poseId: string,
    token: string,
  }) => async () => {
    const { data } = await likeApiService.addLike(poseId, token);
    return data;
  },
});

export const fetchLikesSelector = selectorFamily<string[], string>({
  key: 'FetchLikesSelector',
  get: (token: string) => async () => {
    if (!token || token.length <= 0) {
      return [];
    }
    const { data } = await likeApiService.fetchLikes(token);
    return data.map((item:LikedPose) => item.poseId);
  },
});

export const deleteLikeSelector = selectorFamily({
  key: 'DeleteLikeSelector',
  get: ({ poseId, token } : {
    poseId: string,
    token: string,
  }) => async () => {
    const { data } = await likeApiService.deleteLike(poseId, token);
    return data;
  },
});
