import { PoseType } from '../types/PoseType';

const makeRandomNumber = (length: number) => Math.floor((Math.random() * length));

export default function makeRandomImageSrc(array: PoseType[], count: number) {
  const randomNumbers: number[] = [];
  const { length } = array;
  const actualCount = length >= count ? count : length;

  while (randomNumbers.length < actualCount) {
    const randomNumber: number = makeRandomNumber(length);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers.map((index) => array[index].poseId);
}
