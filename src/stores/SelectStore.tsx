import Store from './Store';

import poseData from '../../pose.json';

const {pose} = poseData;

export type SelectStoreSnapshot = {
	pose: any;
	personNum: string;
	theme: string;
};

export default class SelectStore extends Store<SelectStoreSnapshot> {
	pose = [pose];
	personNum = '';
	theme = '';

	constructor() {
		super();
		this.takeSnapshot();
	}

	savePersonNum(number: string) {
		this.personNum = number;
	}

	saveTheme(theme: string) {
		this.theme = theme;
	}

	update() {
		this.takeSnapshot();
		this.publish();
	}

	takeSnapshot() {
		this.snapshot = {
			pose: this.pose,
			personNum: this.personNum,
			theme: this.theme,
		};
	}
}
