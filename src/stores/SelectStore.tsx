import Store from './Store';

import poseData from '../../pose.json';

import type Pose from '../types/Pose';

const {pose} = poseData;

export type SelectStoreSnapshot = {
	pose: Pose[];
	personNum: string;
	theme: string[];
};

export default class SelectStore extends Store<SelectStoreSnapshot> {
	pose: Pose[] = pose;
	personNum = '';
	theme: string[] = [];

	constructor() {
		super();
		this.takeSnapshot();
	}

	savePersonNum(number: string) {
		this.personNum = number;
		this.update();
	}

	saveTheme(theme: string) {
		if (this.theme.includes(theme)) {
			return;
		}

		this.theme = [...this.theme, theme];
		this.update();
	}

	removeTheme(theme: string) {
		this.theme = this.theme.filter(item => item !== theme);
		this.update();
	}

	resetPersonNum() {
		this.personNum = '';
	}

	resetTheme() {
		this.theme = [];
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
