import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { useReadLocalStorage } from 'usehooks-ts';
import * as S from './Floating.styles';
import FloatingPlusButton from '../svg/FloatingPlusButton';
import PoseRecommendIcon from '../svg/PoseRecommendIcon';
import PoseRegisterIcon from '../svg/PoseRegisterIcon';
import { isLogInModalShowingAtom } from '../../recoil/loginState';

const FLOATING_CONTENTS = [
  {
    text: '포즈 등록',
    imageUrl: PoseRegisterIcon(),
    routes: '/register',
  },
  {
    text: '포즈 추천',
    imageUrl: PoseRecommendIcon(),
    routes: '/people',
  },
];

function ToastButton({ text, imageUrl, routes }:{
  text:string;
  imageUrl: JSX.Element;
  routes: string;
}) {
  const navigate = useNavigate();
  const setIsLogInModalShowing = useSetRecoilState(isLogInModalShowingAtom);
  const storedAccessToken = useReadLocalStorage('accessToken') as string;

  return (
    <S.ToastButton onClick={() => {
      if (routes === '/register' && (!storedAccessToken || storedAccessToken.length <= 0)) {
        setIsLogInModalShowing(true);
        return;
      }
      navigate(routes);
    }}
    >
      {imageUrl}
      <S.Text>{text}</S.Text>
    </S.ToastButton>
  );
}

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -10 },
};

function Toast() {
  return (
    <S.ToastContainer
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {FLOATING_CONTENTS.map((content) => (
        <ToastButton
          key={content.text}
          text={content.text}
          imageUrl={content.imageUrl}
          routes={content.routes}
        />
      ))}
    </S.ToastContainer>
  );
}

export default function Floating() {
  const [isShowingToast, setIsShowingToast] = useState(false);
  const plusButton = FloatingPlusButton(isShowingToast);
  const handleClickFloating = () => {
    setIsShowingToast((prev) => !prev);
  };
  return (
    <S.Container>
      {isShowingToast && <Toast />}
      <S.FloatingButton
        type="button"
        onClick={handleClickFloating}
        isShowingToast={isShowingToast}
      >
        {plusButton}
      </S.FloatingButton>
    </S.Container>
  );
}
