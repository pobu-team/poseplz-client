import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { kakaoTokenSelector } from '../../../recoil/loginState';

export default function KakaoLogIn() {
  const navigate = useNavigate();
  const code = new URL(document.location.toString()).searchParams.get('code');
  const data = useRecoilValue(kakaoTokenSelector(code ?? ''));
  const [storedAccessToken, setStoredAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    if (data) {
      setStoredAccessToken(data.accessToken);
    }
    navigate('/main');
  }, []);

  return (
    <div>로그인 하는 중입니다.</div>
  );
}
