import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useCallback, useState } from 'react';
import axios from 'axios';
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
import DownloadIcon from '../svg/DownloadIcon';
import ShareIcon from '../svg/ShareIcon';

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
  const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
  const tagArr = poseInfo.tags.map((tag: Tag) => tag.selectorName);
  sortTag(tagArr);

  const onClickImgDownload = useCallback((srcUrl: string) => {
    fetch(srcUrl, { method: 'GET' }).then((res) => res.blob()).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = poseId ?? 'posePlz';
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(url);
      }, 1000);
      a.remove();
    }).catch((err) => {
      console.error('err', err);
    });
  }, []);

  async function imageDownload(imageUrl: string) {
    try {
      // 이미지를 서버에서 가져옵니다.
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer', // 이미지 데이터를 바이너리로 받습니다.
      });

      console.log(response);

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
    } catch (error) {
      console.error('이미지 다운로드 실패:', error);
    }
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
          // onClick={() => onClickImgDownload('https://dev.server.poseplz.com/api/v1/files/107054008622937510')} // 됨
          // onClick={() => onClickImgDownload('https://dev.api.poseplz.com/api/v1/files/107054008622937510')} // 안됨
          // onClick={() => onClickImgDownload(`${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/files/107054008622937510`)} // 됨
          // onClick={() => onClickImgDownload(`${process.env.REACT_APP_SERVER_BASE_URL}${poseInfo.imageUrl}`)}

          // onClick={() => onClickImgDownload('https://dev.server.poseplz.com/api/v1/files/107054496326062134')} // 안됨
          // onClick={() => onClickImgDownload('https://dev.server.poseplz.com/api/v1/files/100022288101983442')} // 안됨
          // onClick={() => onClickImgDownload('https://dev.server.poseplz.com/api/v1/files/100060559145494394')} // 인됨
          onClick={() => onClickImgDownload('https://server.poseplz.com/api/v1/files/60111098591940265')} // 인됨
          // onClick={() => onClickImgDownload('https://server.poseplz.com/api/v1/files/117392937061964320')} // 인됨

          // proxyTest
          // onClick={() => onClickImgDownload('/api/v1/files/107054008622937510')}
          // onClick={() => onClickImgDownload('/api/v1/files/100060559145494394')}
          // onClick={() => onClickImgDownload(`${poseInfo.imageUrl}`)}

          // 됨
          // onClick={() => onClickImgDownload('https://raw.githubusercontent.com/potenday-project/PoBu_pose_recommend/develop/static/images/person-4.png')}
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
