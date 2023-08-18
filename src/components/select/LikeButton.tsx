import { useSetRecoilState } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import { isLogInModalShowingAtom } from '../../recoil/loginState';
import likeApiService from '../../service/LikeApiService';

type LikeButtonProps = {
  likePoseIdArr: string[];
  poseId: string;
  setLikePoseIdArr: (value: string[]) => void;
}

export default function LikeButton({ likePoseIdArr, poseId, setLikePoseIdArr }: LikeButtonProps) {
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const active = likePoseIdArr.includes(poseId);

  const handleClickLike = async () => {
    if (!storedAccessToken || storedAccessToken.length <= 0) {
      setIsLogInModalShowing(true);
      return;
    }

    if (active) {
      await likeApiService.deleteLike(poseId, storedAccessToken);
      setLikePoseIdArr(likePoseIdArr.filter((id) => id !== poseId));
    } else {
      await likeApiService.addLike(poseId, storedAccessToken);
      setLikePoseIdArr([...likePoseIdArr, poseId]);
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        handleClickLike();
      }}
    >
      <object
        data={
          active
            ? '/images/btn_like_active.svg'
            : '/images/btn_like_default.svg'
        }
        aria-label="btn_like"
      />
    </button>
  );
}
