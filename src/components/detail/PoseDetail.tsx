import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useNavigate } from 'react-router';
import { ButtonContainer, PoseContainer, TagButtonContainer } from './PoseDetail.styles';
import { PoseWithIdSelector } from '../../recoil/poseState';

import { PoseInfo } from '../../types/PoseType';
import { Tag } from '../../types/Tag';

import sortTag from '../../utils/sortTag';
import shareLink from '../../utils/share';

import TagButton from '../../ui/TagButton';
import addGaEvent from '../../utils/addGaEvent';
import LikeButton from '../select/LikeButton';
import useFetchLikeList from '../../hooks/useFetchLikeList';

type PoseDetailProps = {
  poseId: (string | undefined);
};

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};

  @media screen and (max-width: 340px) {
    padding: 1.2rem;
  }
`;

function PoseImage({ poseInfo } : {poseInfo: PoseInfo}) {
  const likePoseIdArr = useFetchLikeList();

  return (
    <PoseContainer>
      <div>
        <img src={`${process.env.REACT_APP_API_BASE_URL}${poseInfo.imageUrl}`} alt={poseInfo.imageUrl} />
      </div>
      <LikeButton
        likePoseIdArr={likePoseIdArr}
        poseId={poseInfo.poseId}
        type="DETAIL"
      />
    </PoseContainer>
  );
}

export default function PoseDetail({ poseId }: PoseDetailProps) {
  const navigate = useNavigate();
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const tagArr = poseInfo.tags.map((tag: Tag) => tag.selectorName);
  sortTag(tagArr);

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
          onClick={() => {
            navigate('/people');
            addGaEvent('More Recommend');
          }}
        >
          포즈 더 추천받기
        </button>
        <button
          type="button"
          onClick={async () => {
            await shareLink(poseInfo.imageUrl, poseInfo.poseId);
            addGaEvent('Share Pose');
          }}
        >
          포즈 공유하기
        </button>
      </ButtonContainer>
    </Container>
  );
}
