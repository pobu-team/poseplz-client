import { PoseType } from '../types/PoseType';

export default function makeRandomImageSrc(array: PoseType[], count: number) {
  const shuffled = array.slice();
  let currentIndex = shuffled.length;
  const result = [];

  while (currentIndex > 0 && count > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];

    result.push(shuffled[currentIndex]);
    count -= 1;
  }

  return result.map((v) => v.thumbnailImageUrl);
}
