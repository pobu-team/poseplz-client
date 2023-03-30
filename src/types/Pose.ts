import type Image from './Image';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface Pose {
	id: string;
	image: Image[];
}

export default Pose;
