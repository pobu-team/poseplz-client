import axios from 'axios';

async function imageDownload({ imageUrl, poseId }:
  {
    imageUrl: string;
    poseId: string;
  }) {
  // 이미지를 서버에서 가져옵니다.
  const response = await axios.get(imageUrl, {
    responseType: 'arraybuffer', // 이미지 데이터를 바이너리로 받습니다.
  });

  // 이미지를 다운로드하기 위한 Blob 객체를 생성합니다.
  const blob = new Blob([response.data], { type: 'image/jpeg' });

  // Blob 객체를 URL로 변환합니다.
  const blobUrl = URL.createObjectURL(blob);

  // a 태그를 생성하여 다운로드 링크를 만듭니다.
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = poseId ?? 'posePlz';

  // a 태그를 클릭하여 파일을 다운로드합니다.
  link.click();

  // Blob URL을 해제합니다.
  URL.revokeObjectURL(blobUrl);
}

export default imageDownload;
