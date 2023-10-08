import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import ImageUploadButton from './ImageUploadButton';
import ImagePreview from './ImagePreview';
import { imgAtom, imgFileAtom } from '../../recoil/registerState';
import NextButton from './NextButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.4rem;
`;

const DisabledInput = styled.input`
  display: none;
`;

export default function AddImage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useRecoilState(imgAtom);
  const setFileData = useSetRecoilState(imgFileAtom);
  const navigator = useNavigate();

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      e.target.value = '';
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
        setFileData(file);
      };
    }
  }, []);

  return (
    <Container>
      <DisabledInput type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
      {!imgFile && <ImageUploadButton inputRef={inputRef} />}
      {imgFile && <ImagePreview />}
      <NextButton active={imgFile.length > 0} handleOnClick={() => navigator('/register/info')}>다음</NextButton>
    </Container>
  );
}
