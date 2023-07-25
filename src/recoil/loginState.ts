import { atom } from 'recoil';

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
});

export const isLogInModalShowingAtom = atom({
  key: 'isLogInModalShowingAtom',
  default: false,
});
