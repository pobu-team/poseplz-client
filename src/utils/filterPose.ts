import type Pose from '../types/Pose';

type FilterPoseProps = {
	filteredPoseByPerson: Pose[];
	theme: string[];
};

export default function filterPose({filteredPoseByPerson, theme}: FilterPoseProps) {
	if (!theme.length) {
		theme = ['simple', 'friendly', 'fun', 'love', 'birthday', 'holiday', 'christmas'];
	}

	const filterPose = (theme: string) => filteredPoseByPerson[0].image
		.filter(item => item.theme === theme || item.special === theme);

	const filteredPose = [];

	for (const x of theme) {
		filteredPose.push(filterPose(x));
	}

	return filteredPose;
}
