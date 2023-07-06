const CATEGORY = {
  PEOPLE: 'people',
  THEME: 'theme',
  POPULAR: 'popular',
} as const;

type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

export default CATEGORY;
