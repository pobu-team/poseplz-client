import styled from 'styled-components';
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
import imageDownload from '../../utils/downloadImage';

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

  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`;
  const handleClickDownloadButton = () => {
    imageDownload({ imageUrl, poseId: poseInfo.poseId });
  };

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
          onClick={handleClickDownloadButton}
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
