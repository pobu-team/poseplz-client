import { useSetRecoilState } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import { useEffect, useState } from 'react';
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
  const [active, setActive] = useState(likePoseIdArr.includes(poseId));

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
  };

  return (
    <button
      type="button"
      onClick={() => {
        handleClickLike();
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g filter="url(#filter0_d_880_2161)">
          <circle cx="24" cy="24" r="16" fill="white" />
        </g>
        <g filter="url(#filter1_i_880_2161)">
          <path d="M24 18.3887C22.9528 17.443 21.5804 16.9464 20.1751 17.0046C18.7698 17.0628 17.4425 17.6713 16.476 18.7005C15.5095 19.7296 14.9801 21.0981 15.0006 22.5146C15.021 23.931 15.5897 25.2834 16.5855 26.2839L22.7281 32.4695C23.0655 32.8092 23.523 33 24 33C24.477 33 24.9345 32.8092 25.2719 32.4695L31.4145 26.2839C32.4103 25.2834 32.979 23.931 32.9994 22.5146C33.0199 21.0981 32.4905 19.7296 31.524 18.7005C30.5575 17.6713 29.2302 17.0628 27.8249 17.0046C26.4196 16.9464 25.0472 17.443 24 18.3887Z" fill={active ? '#8EED15' : '#EAEAF2'} />
        </g>
        <defs>
          <filter id="filter0_d_880_2161" x="4" y="8" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_880_2161" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_880_2161" result="shape" />
          </filter>
          <filter id="filter1_i_880_2161" x="15" y="17" width="18" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_880_2161" />
          </filter>
        </defs>
      </svg>
    </button>
  );
}
