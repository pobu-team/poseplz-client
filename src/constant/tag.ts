export const themeObj: themeObj = {
  '분위기있게': '1',
  '예쁘게': '2',
  '재미있게': '3',
  '귀엽게': '4',
  '연인사이': '5',
  '친구끼리': '6',
}

type themeObj = Record<string, string>

export const ONE_PERSON = ['분위기있게', '예쁘게', '재미있게', '귀엽게'];
export const TWO_PERSON = ['연인사이', '친구끼리', '재미있게', '귀엽게'];
export const THREE_MORE_PERSON = ['친구끼리', '예쁘게', '재미있게', '귀엽게'];
