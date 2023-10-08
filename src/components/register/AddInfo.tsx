import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import NextButton from './NextButton';
import { AtmosphereTagSelector, PeopleTagSelector } from '../../recoil/tagState';
import { Tag } from '../../types/Tag';
import { imgAtom, imgFileAtom } from '../../recoil/registerState';
import { apiService } from '../../service/ApiService';

const Container = styled.div`
  margin: 2.4rem;
`;

const QuestionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.6rem;
  margin-bottom: 1.6rem;
  
  span {
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.textAlternative}
  }
`;

const SelectBox = styled.select`
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.textNormal};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.lineNormal};
  border-radius: 8px;
  background-image: url("/images/selectArrow.png");
  background-repeat: no-repeat;
  background-position: 95% 50%;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none; 
`;

const ButtonList = styled.div`
  margin-bottom: 4rem;
`;

const TagButton = styled.button<{active: boolean}>`
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1.6rem;
  background-color: ${(props) => (props.active ? props.theme.colors.background : props.theme.colors.backgroundSecondary)};
  border: 2px solid ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.lineNormal)};
  border-radius: 50px;
  color: ${(props) => props.theme.colors.textNormal};
  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: -2%;
`;

export default function AddInfo() {
  const tagList:Tag[] = useRecoilValue(AtmosphereTagSelector);
  const peopleTagIds:Tag[] = useRecoilValue(PeopleTagSelector);
  const setImgFile = useSetRecoilState(imgAtom);
  const [fileData, setFileData] = useRecoilState(imgFileAtom);
  const [selectedPeopleNum, setSelectedPeopleNum] = useState(0);
  const [selectedTagIds, setSelectedTagIds] = useState(new Set<string>());
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const peopleTagList = ['인원을 선택해주세요.', '1', '2', '3', '4', '5', '6인 이상'];

  return (
    <Container>
      <QuestionTitle>몇명이서 찍었나요?</QuestionTitle>
      <SelectBox onChange={(e) => {
        setSelectedPeopleNum(Number(e.target.value));
      }}
      >
        {peopleTagList.map((item, idx) => <option key={item} value={idx}>{item}</option>)}
      </SelectBox>
      <QuestionTitle>
        태그를 선택해주세요.
        <span>*1개 이상 선택</span>
      </QuestionTitle>
      <ButtonList>
        {tagList.map((item) => (
          <TagButton
            type="button"
            key={item.tagId}
            active={selectedTagIds.has(item.tagId)}
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              selectedTagIds.has(item.tagId) ? setSelectedTagIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(item.tagId);
                return newSet;
              })
                : setSelectedTagIds((prev) => new Set([...prev, item.tagId]));
            }}
          >
            {item.selectorName}
          </TagButton>
        ))}
      </ButtonList>
      <NextButton
        active={fileData.name.length > 0 && selectedPeopleNum > 0 && selectedTagIds.size > 0}
        handleOnClick={async () => {
          // 로그인정보와 같이 포즈등록 api 호출
          const formData = new FormData();
          formData.append('file', fileData as Blob);
          const { data } = await apiService.addFile(formData);
          const resp = await apiService.addPose(
            storedAccessToken,
            selectedPeopleNum,
            [...selectedTagIds,
              peopleTagIds.find((item) => item.description === String(selectedPeopleNum))?.tagId ?? ''],
            data.fileId,
          );
          // 상태 초기화하기
          setImgFile('');
          setFileData({ name: '' });
          // 끝나고 디테일로 보내기
          window.location.href = `${window.location.origin}/pose/detail?poseId=${resp.data.poseId}`;
        }}
      >
        등록하기
      </NextButton>
    </Container>
  );
}
