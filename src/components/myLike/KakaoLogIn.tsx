import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { authSelector, isLoggedInAtom } from '../../recoil/loginState';

export default function KakaoLogIn() {
  const navigate = useNavigate();
  const code = new URL(document.location.toString()).searchParams.get('code');
  const setLoggedIn = useSetRecoilState(isLoggedInAtom);
  const authData = useRecoilValue(authSelector(code ?? ''));
  useEffect(() => {
    if (code) {
      setLoggedIn(true);
      console.log(authData.accessToken);
    }
    navigate('/mypage');
  }, []);
  return (
    <div>로그인 하는 중입니다.</div>
  );
}
