import MostSharedPose from './MostSharedPose';
import PopularPose from './PopularPose';
import StartButton from './StartButton';

export default function Main() {
	return (
		<div>
			<StartButton />
			<MostSharedPose />
			<PopularPose />
		</div>
	);
}
