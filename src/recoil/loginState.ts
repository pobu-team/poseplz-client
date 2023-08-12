import { atom, selectorFamily } from 'recoil';
import logInApiService from '../service/LogInApiService';
import { authData } from '../types/logIn';

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
});

export const isLogInModalShowingAtom = atom({
  key: 'isLogInModalShowingAtom',
  default: false,
});

export const authSelector = selectorFamily<authData, string>({
  key: 'authSelector',
  get: (logInCode: string) => async () => {
    const { data } = await logInApiService.postAuth(logInCode);
    return data;
  },
});
