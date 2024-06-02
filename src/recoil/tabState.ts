import { atom } from 'recoil';
import { ALL_PEOPLE_TAG, COMIC_TAG } from '../constant/tagId';

export const PeopleCategoryTabAtom = atom({
  key: 'PeopleCategoryTabAtom',
  default: ALL_PEOPLE_TAG,
});

export const ThemeCategoryTabAtom = atom({
  key: 'ThemeCategoryTabAtom',
  default: COMIC_TAG,
});

export const myPageTabAtom = atom({
  key: 'myPageTabAtom',
  default: true,
});
