import { useReadLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
// eslint-disable-next-line camelcase
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';
import { fetchLikesSelector } from '../recoil/likeState';

export default function useFetchLikeList() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const initialLikes = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    fetchLikesSelector(storedAccessToken),
  );
  const [likePoseIdArr, setLikePoseIdArr] = useState(initialLikes);
  return { likePoseIdArr, setLikePoseIdArr };
}
