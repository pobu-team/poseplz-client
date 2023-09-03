import { useReadLocalStorage } from 'usehooks-ts';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { fetchLikesSelector } from '../recoil/likeState';

export default function useFetchLikeList() {
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const initialLikes = useRecoilValue(fetchLikesSelector(storedAccessToken));
  const [likePoseIdArr, setLikePoseIdArr] = useState(initialLikes);
  return { likePoseIdArr, setLikePoseIdArr };
}
