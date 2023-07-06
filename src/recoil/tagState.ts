import { selector } from 'recoil';
import { apiService } from '../service/ApiService';
import { Tag } from '../types/Tag';

// export const TagState = atom<number[]>({
//   key: 'TagState',
//   default: [],
// });

export const TagSelector = selector({
  key: 'TagSelector',
  get: async () => {
    const { data } = await apiService.fetchTags();
    return data;
  },
});

export const PeopleTagSelector = selector<Tag[]>({
  key: 'PeopleTagSelector',
  get: async () => {
    const { data } = await apiService.fetchPeopleTags();
    // "전체" 태그 추가하기
    const AllPeopleTag: Tag = {
      tagId: '000',
      type: 'NUMBER_OF_PEOPLE',
      name: '#전체',
      selectorName: '전체',
      selectorDisplayOrder: 0,
      emojiImageUrl: '',
      emojiText: '',
      description: '',
    };
    return [AllPeopleTag, ...data];
  },
});

export const AtmosphereTagSelector = selector<Tag[]>({
  key: 'AtmosphereTagSelecter',
  get: async () => {
    const { data } = await apiService.fetchAtmosphereTags();
    return data;
  },
});
