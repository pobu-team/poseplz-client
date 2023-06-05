const url = 'https://www.poseplz.com';

const shareKaKao = (src: string) => {
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '포즈를 부탁해',
      description: '이 포즈 어때?',
      imageUrl: `https://server.poseplz.com/api/v1/files/${src}`,
      link: {
        mobileWebUrl: url + src,
        webUrl: url + src,
      },
    },
    buttons: [
      {
        title: '포즈 보러 가기',
        link: {
          mobileWebUrl: url + '/detail/?imageSrc=' + src,
          webUrl: url + '/detail/?imageSrc=' + src,
        },
      },
    ],
  });
};

export default shareKaKao;
