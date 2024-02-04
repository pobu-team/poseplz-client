import styled from 'styled-components';
import useFetchLikeList from '../../hooks/useFetchLikeList';
import useModal from '../../hooks/useModal';
import { PoseInfo } from '../../types/PoseType';
import Modal from '../common/Modal';
import LikeButton from '../select/LikeButton';
import { PoseContainer } from './PoseDetail.styles';

const FullImage = styled.div`
  img {
    width: 100%;
  }
`

export default function PoseImage({ poseInfo } : {poseInfo: PoseInfo}) {
  const likePoseIdArr = useFetchLikeList();
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <PoseContainer>
        <div>
          <img onClick={openModal} src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
        </div>
        <LikeButton
          likePoseIdArr={likePoseIdArr}
          poseId={poseInfo.poseId}
          type="DETAIL"
          />
      </PoseContainer>
      <Modal modalRef={modalRef} hide={closeModal} hideOnClickOutside>
        <FullImage>
          <img src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
        </FullImage>
      </Modal>
     </>
  );
}
