import type Pose from '../types/PoseType';

type FilterPoseProps = {
  filteredPoseByPerson: Pose[];
  themeArr: number[];
};

export default function filterPose({ filteredPoseByPerson, themeArr }: FilterPoseProps) {
  if (!themeArr.length) {
    themeArr = ['simple', 'friendly', 'fun', 'love', 'birthday', 'holiday', 'christmas'];
  }

  const filterPose = (theme: string) => filteredPoseByPerson[0].image
    .filter((item) => item.theme === theme || item.special === theme);

  const filteredPose = [];

  for (const x of themeArr) {
    filteredPose.push(filterPose(x));
  }

  return filteredPose;
}
