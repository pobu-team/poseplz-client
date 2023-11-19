import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
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
import LoginModal from '../../ui/LoginModal';
import { isLogInModalShowingAtom } from '../../recoil/loginState';
import DeleteIcon from '../svg/DeleteIcon';
import BoxModal from '../../ui/BoxModal';
import Loading from '../common/Loading';
import useFetchMyPoses from '../../hooks/useFetchMyPoses';
import { useDeletePose } from '../../queries/poses';

type PoseDetailProps = {
  poseId: (string | undefined);
};

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 340px) {
    padding: 1.2rem;
  }
`;

const ButtonSection = styled.section`
  position: fixed;
  left: 50%;
  translate: -50%;
  bottom: 0;
  width: 100vw;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  @media screen and (max-width: 340px) {
    padding: 1.2rem;
  }
`;

const DeleteButton = styled.button`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  padding: 1.1rem 2rem 1.1rem 1.6rem;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.lineNormal};
  color: ${(props) => props.theme.colors.textNormal};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  cursor: pointer;
`;

export default function PoseDetail({ poseId }: PoseDetailProps) {
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const isLogInModalShowing = useRecoilValue(isLogInModalShowingAtom);
  const [isDeleteModalShowing, setIsDeleteModalShowing] = useState(false);
  const tagArr = poseInfo.tags.map((tag: Tag) => tag.selectorName);
  const { isLoading, data: myPoses } = useFetchMyPoses();
  const mutate = useDeletePose();
  sortTag(tagArr);

  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`;
  const handleClickDownloadButton = () => {
    imageDownload({ imageUrl, poseId: poseInfo.poseId });
  };

  if (isLoading) {
    <Loading />;
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
      <ButtonSection>
        {myPoses?.find((item) => item.poseId === poseId)
        && (
          <DeleteButton onClick={() => setIsDeleteModalShowing(true)}>
            <DeleteIcon width={24} height={24} />
            <span>삭제하기</span>
          </DeleteButton>
        )}
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
      </ButtonSection>
      {isDeleteModalShowing
      && (
        <BoxModal
          handleClose={() => setIsDeleteModalShowing(false)}
          handleClick={() => {
            mutate(poseId ?? '');
          }}
          text="등록한 포즈를 삭제하시겠어요?"
        />
      )}
      {isLogInModalShowing && <LoginModal />}
    </Container>
  );
}
