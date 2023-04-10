const url = 'https://pobu.vercel.app';

const shareKaKao = (src: string) => {
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	Kakao.Share.sendDefault({
		objectType: 'feed',
		content: {
			title: '포즈를 부탁해',
			description: '이 포즈 어때?',
			imageUrl: `https://raw.githubusercontent.com/himyne/PoBu_pose_recommend/main/static/images${src}`,
			link: {
				mobileWebUrl: url + src,
				webUrl: url + src,
			},
		},
		buttons: [
			{
				title: '포즈 보러 가기',
				link: {
					mobileWebUrl: url + src,
					webUrl: url + src,
				},
			},
		],
	});
};

export default shareKaKao;
