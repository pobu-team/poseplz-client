import styled from 'styled-components';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { ButtonContainer, TagButtonContainer } from './PoseDetail.styles';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import { Tag } from '../../types/Tag';
import sortTag from '../../utils/sortTag';
import shareLink from '../../utils/share';
import TagButton from '../../ui/TagButton';
import addGaEvent from '../../utils/addGaEvent';
import DownloadIcon from '../svg/DownloadIcon';
import ShareIcon from '../svg/ShareIcon';
import PoseImage from './PoseImage';

type PoseDetailProps = {
  poseId: (string | undefined);
};

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px) {
    padding: 1.2rem;
  }
`;

export default function PoseDetail({ poseId }: PoseDetailProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const tagArr = poseInfo.tags.map((tag: Tag) => tag.selectorName);
  sortTag(tagArr);

  async function imageDownload(imageUrl: string) {
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

  return (
    <Container>
      <TagButtonContainer>
        {tagArr.map((tagName: string) => (
          <TagButton
            key={tagName}
            tagName={tagName}
          />
        ))}
      </TagButtonContainer>
      <PoseImage poseInfo={poseInfo} />
      <ButtonContainer>
        <button
          type="button"
          onClick={() => imageDownload(`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`)}
        >
          <DownloadIcon />
          포즈 다운로드
        </button>
        <button
          type="button"
          onClick={async () => {
            await shareLink(poseInfo.imageUrl, poseInfo.poseId);
            addGaEvent('Share Pose');
          }}
        >
          <ShareIcon />
          포즈 공유하기
        </button>
      </ButtonContainer>
    </Container>
  );
}
