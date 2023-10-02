import { useCallback } from 'react';
import styled from 'styled-components';
import UploadImageIcon from '../svg/UploadImageIcon';

interface ImageUploadButtonProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>
}

const Button = styled.button`
  display: flex;
  width: 32.7rem;
  height: 56.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border: 2px dashed ${(props) => props.theme.colors.lineNormal};
  border-radius: 20px;
  cursor: pointer;

  p {
    margin-top: 1.6rem;
    color: ${(props) => props.theme.colors.textNormal};
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.6rem;
  }
`;

export default function ImageUploadButton({ inputRef } : ImageUploadButtonProps) {
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <Button type="button" onClick={onUploadImageButtonClick}>
      <UploadImageIcon />
      <p>사진 가져오기</p>
    </Button>
  );
}
