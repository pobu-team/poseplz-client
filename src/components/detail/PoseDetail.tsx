import styled from 'styled-components';

import shareKaKao from '../../utils/share';

type PoseDetailProps = {
  imageSrc: string | undefined;
  onClickBack: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.detailBackground};

  div:first-child {
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.detailButton};
    
    img {
      padding: 20px 20px;
      display: flex;
      max-width: 300px;
      max-height: 600px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  button{
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    width: 180px;
    padding: 0;
    height: 60px;
    margin: 30px 0;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.detailButton};

    @media screen and (max-width: 340px) {
      font-size: 13px;
      height: 50px;
    }
  }

  button:last-child {
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.primary};
  }
`;

export default function PoseDetail({ imageSrc, onClickBack }: PoseDetailProps) {
  return (
    <Container>
      <div>
        <img src={`https://server.poseplz.com/api/v1/files/${imageSrc}`} alt={imageSrc} />
      </div>
      <ButtonContainer>
        <button
          type="button"
          onClick={onClickBack}
        >
          포즈 더 추천받기
        </button>
        <button
          type="button"
          onClick={() => {
            shareKaKao(imageSrc ?? '');
          }}
        >
          포즈 공유하기
        </button>
      </ButtonContainer>
    </Container>
  );
}
