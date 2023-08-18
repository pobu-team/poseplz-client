import { atom, selectorFamily } from 'recoil';
import { authData, kakaoTokenData } from '../types/logIn';
import logInApiService from '../service/LogInApiService';
import kakaoApiService from '../service/KakaoApiService';

export const isLogInModalShowingAtom = atom({
  key: 'isLogInModalShowingAtom',
  default: false,
});

export const kakaoTokenSelector = selectorFamily<authData, string>({
  key: 'kakaoTokenSelector',
  get: (loginCode :string) => async () => {
    const response: kakaoTokenData = await kakaoApiService.postKakaoToken(loginCode);
    const result = await logInApiService.postAuth(response.access_token);
    return result.data;
  },
});

export const memberSelector = selectorFamily({
  key: 'memberSelector',
  get: (token :string) => async () => {
    const { data } = await logInApiService.getMemberInfo(token);
    return data;
  },
});
