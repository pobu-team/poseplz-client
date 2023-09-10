// eslint-disable-next-line camelcase
import { useRecoilRefresher_UNSTABLE, useSetRecoilState } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import { useEffect, useState, useTransition } from 'react';
import styled from 'styled-components';
import { isLogInModalShowingAtom } from '../../recoil/loginState';
import likeApiService from '../../service/LikeApiService';
import Like from '../svg/Like';
import { LikeButtonType } from '../../types/LikePose';
import { fetchLikesSelector } from '../../recoil/likeState';

type LikeButtonProps = {
  likePoseIdArr: string[];
  poseId: string;
  setLikePoseIdArr: (value: string[]) => void;
  type: LikeButtonType;
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default function LikeButton({
  likePoseIdArr, poseId, setLikePoseIdArr, type,
}: LikeButtonProps) {
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const [active, setActive] = useState(likePoseIdArr.includes(poseId));
  const refresh = useRecoilRefresher_UNSTABLE(fetchLikesSelector(storedAccessToken));
  const [, startTransition] = useTransition();

  useEffect(() => {
    setActive(likePoseIdArr.includes(poseId));
  }, [likePoseIdArr]);

  const handleClickLike = async () => {
    if (!storedAccessToken || storedAccessToken.length <= 0) {
      setIsLogInModalShowing(true);
      return;
    }

    if (active) {
      await likeApiService.deleteLike(poseId, storedAccessToken);
      const newLikePoseIdArr = likePoseIdArr.filter((id) => id !== poseId);
      setLikePoseIdArr(newLikePoseIdArr);
    } else {
      await likeApiService.addLike(poseId, storedAccessToken);
      setLikePoseIdArr([...likePoseIdArr, poseId]);
    }

    startTransition(() => {
      refresh();
    });
  };

  return (
    <Button
      type="button"
      onClick={() => {
        handleClickLike();
      }}
    >
      <Like active={active} type={type} />
    </Button>
  );
}
