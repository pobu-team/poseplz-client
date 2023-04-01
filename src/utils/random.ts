/* eslint-disable no-constant-condition */
export default function makeRandomImageSrc() {
	const imageArr: string[] = [];

	while (imageArr.length < 6) {
		const personId = makeRandomNumber(6);
		const imageId = makeRandomNumber(12);
		const imageSrc = personId + '-' + imageId;
		console.log(imageSrc);
		if (!imageArr.includes(imageSrc)) {
			imageArr.push(imageSrc);
		}
	}

	return imageArr;
}

function makeRandomNumber(num: number) {
	return String(Math.floor(Math.random() * num) + 1);
}
