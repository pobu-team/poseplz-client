/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface Kakao {
	init: (apiKey: string) => void;
	Share: any;
}

declare global {
	interface Window {
		Kakao: Kakao;
	}
}

export default Kakao;
