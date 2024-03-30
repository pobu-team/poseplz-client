import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { ButtonContainer, TagButtonContainer } from './PoseDetail.styles';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import { Tag } from '../../types/Tag';
import sortTag from '../../utils/sortTag';
import shareLink from '../../utils/share';
import TagButton from '../../ui/TagButton';
import addGaEvent from '../../utils/addGaEvent';
import ShareIcon from '../svg/ShareIcon';
import PoseImage from './PoseImage';
import LoginModal from '../../ui/LoginModal';
import { isLogInModalShowingAtom } from '../../recoil/loginState';
import DeleteIcon from '../svg/DeleteIcon';
import BoxModal from '../../ui/BoxModal';
import Loading from '../common/Loading';
import useFetchMyPoses from '../../hooks/useFetchMyPoses';
import { useDeletePose } from '../../queries/poses';
import LinkCopyIcon from '../svg/LinkCopyIcon';
import useSnackbar from '../common/SnackBar/useSnackbar';
import CheckIcon from '../svg/CheckIcon';

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

const LinkCopySnackBar = (
  <>
    <CheckIcon />
    <p style={{ marginLeft: '8px' }}>링크가 복사되었습니다.</p>
  </>
);

export default function PoseDetail({ poseId }: PoseDetailProps) {
  const { pathname, search } = useLocation();

  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const isLogInModalShowing = useRecoilValue(isLogInModalShowingAtom);
  const [isDeleteModalShowing, setIsDeleteModalShowing] = useState(false);
  const tagArr = poseInfo.tags.map((tag: Tag) => tag.selectorName);
  const { isLoading, data: myPoses } = useFetchMyPoses();
  const mutate = useDeletePose();
  sortTag(tagArr);
  const { snackbar, open } = useSnackbar(LinkCopySnackBar);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      open();
    } catch (err) {
      console.log(err);
    }
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
            onClick={() => handleCopyClipBoard(`www.poseplz.com/${pathname}/${search}`)}
          >
            <LinkCopyIcon />
            포즈 링크복사
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
      {snackbar}
    </Container>
  );
}
