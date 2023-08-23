import { atom, selectorFamily } from 'recoil';
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

// fetchLikesSelector를 refetch 하기 위한 state
export const likesReqIdState = atom({
  key: 'likesReqIdStateAtom',
  default: 1,
});

// 좋아요한 포즈 리스트를 불러오기
export const fetchLikesSelector = selectorFamily<string[], string>({
  key: 'FetchLikesSelector',
  get: (token: string) => async ({ get }) => {
    if (!token || token.length <= 0) {
      return [];
    }
    const { data } = await likeApiService.fetchLikes(token);
    get(likesReqIdState);
    return data.map((item:LikedPose) => item.poseId);
  },
  set: () => ({ set }) => {
    set(likesReqIdState, (id) => id + 1);
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
