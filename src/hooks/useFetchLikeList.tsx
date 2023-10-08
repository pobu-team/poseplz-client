import { useReadLocalStorage } from 'usehooks-ts';
// eslint-disable-next-line camelcase
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';
import { fetchLikesSelector } from '../recoil/likeState';

export default function useFetchLikeList() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const likePoseIdArr = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    fetchLikesSelector(storedAccessToken),
  );
  return likePoseIdArr;
}
