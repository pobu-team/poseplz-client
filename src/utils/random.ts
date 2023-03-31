export default function makeRandomImageSrc() {
	const imageArr: string[] = [];
	for (let i = 0; i < 6; i++) {
		const personId = makeRandomNumber(6);
		const imageId = makeRandomNumber(12);
		const imageSrc = personId + '-' + imageId;
		if (!imageArr.includes(imageSrc)) {
			imageArr.push(imageSrc);
		}
	}

	return imageArr;
}

function makeRandomNumber(num: number) {
	return String(Math.floor(Math.random() * num) + 1);
}
