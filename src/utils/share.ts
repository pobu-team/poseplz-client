const url = 'https://www.poseplz.com';

const shareKaKao = (src: string, poseId: string) => {
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '포즈를 부탁해',
      description: '이 포즈 어때?',
      imageUrl: `${process.env.REACT_APP_API_BASE_URL}/${src}`,
      link: {
        mobileWebUrl: url + src,
        webUrl: url + src,
      },
    },
    buttons: [
      {
        title: '포즈 보러 가기',
        link: {
          mobileWebUrl: `${url}/pose/detail/?poseId=${poseId}`,
          webUrl: `${url}/pose/detail/?poseId=${poseId}`,
        },
      },
    ],
  });
};

const shareLink = async (src: string, poseId: string) => {
  try {
    await navigator.share({
      title: '포즈를 부탁해',
      url: '',
      files: [],
    }).then(() => {
      console.log('공유 성공');
    });
    console.log('공유 성공');
  } catch (e) {
    shareKaKao(src, poseId);
  }
};

export default shareLink;
