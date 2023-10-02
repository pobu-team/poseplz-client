import { atom } from 'recoil';

export const imgAtom = atom({
  key: 'imgAtom',
  default: '',
});

export const imgFileAtom = atom({
  key: 'imgFileAtom',
  default: { name: '' },
});
