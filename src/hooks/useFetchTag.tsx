import { useRecoilValue } from 'recoil';
import TagSelector from '../recoil/tagState';
import Tag from '../types/Tag';

export default function useFetchTag(id: string, theme: string) {
  const tags = useRecoilValue(TagSelector);

  const personNumTags = tags.filter((tag: Tag) => tag.type === 'NUMBER_OF_PEOPLE');
  let filteredTags = tags.filter((tag: Tag) => tag.type !== 'NUMBER_OF_PEOPLE');

  const personNumTag = personNumTags.filter((tag: Tag) => tag.name === `#${id}인`);

  if (theme === '자연스러움') {
    filteredTags = filteredTags.filter((tag: Tag) => tag.description === '분위기있게');
  }
  if (theme === '예쁘게') {
    filteredTags = filteredTags.filter((tag: Tag) => tag.description?.includes('예쁘게'));
  }
  if (theme === '귀엽게') {
    filteredTags = filteredTags.filter((tag: Tag) => tag.description === '귀엽게');
  }
  if (theme === '친구끼리') {
    filteredTags = filteredTags.filter((tag: Tag) => tag.description === '친구끼리');
  }
  if (theme === '재밌게') {
    filteredTags = filteredTags.filter((tag: Tag) => tag.description === '재밌게');
  }
  return [personNumTag, filteredTags];
}
