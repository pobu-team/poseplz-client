import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import DeleteIcon from '../svg/DeleteIcon';
import { imgAtom } from '../../recoil/registerState';

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 32.7rem;
  height: 56.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 20px;
  padding: 3rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function ImagePreview() {
  const [imgFile, setImgFile] = useRecoilState(imgAtom);

  return (
    <ImageWrapper>
      <RemoveButton onClick={() => setImgFile('')}>
        <DeleteIcon />
      </RemoveButton>
      <img src={imgFile} alt="uploaded" />
    </ImageWrapper>
  );
}
