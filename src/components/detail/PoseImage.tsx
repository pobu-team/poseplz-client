import styled from 'styled-components';
import useFetchLikeList from '../../hooks/useFetchLikeList';
import useModal from '../../hooks/useModal';
import { PoseInfo } from '../../types/PoseType';
import Modal from '../common/Modal';
import LikeButton from '../select/LikeButton';
import { PoseContainer } from './PoseDetail.styles';
import OpenInNew from '../svg/OpenInNew';

const FullImage = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 57px);
    object-fit: contain;
  }
`;

export const StyledAnchor = styled.a`
  position: absolute;
  right: 12px;
  bottom: 12px;

  display: flex;
  align-items: center;
  gap: 6px;

  text-decoration: none;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
`;

export default function PoseImage({ poseInfo } : {poseInfo: PoseInfo}) {
  const likePoseIdArr = useFetchLikeList();
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <PoseContainer>
        <div role="button" onClick={openModal} tabIndex={0} onKeyDown={openModal}>
          <img src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
        </div>
        <LikeButton
          likePoseIdArr={likePoseIdArr}
          poseId={poseInfo.poseId}
          type="DETAIL"
        />
        {poseInfo.sourceUrl && (
          <StyledAnchor href={poseInfo.sourceUrl} target="_blank">
            이미지 출처
            <OpenInNew />
          </StyledAnchor>
        )}
      </PoseContainer>
      <Modal modalRef={modalRef} hide={closeModal} hideOnClickOutside>
        <FullImage onClick={closeModal}>
          <img src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
        </FullImage>
      </Modal>
    </>
  );
}
