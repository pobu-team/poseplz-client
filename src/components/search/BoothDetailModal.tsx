import styled from 'styled-components';
import { Brand } from '../../types/PhotoBooth';

const Container = styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 28px 24px 24px 24px;
  
  z-index: 1;
  border-radius: 20px 20px 0px 0px;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
`;

const BoothName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;

const Address = styled.p`
  font-weight: 500;
  line-height: 24px;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.textAlternative};
`;

const ImageContainer = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const Image = styled.img`
  border-radius: 8px;
`;

export type BoothDetailModalProps = {
  name: string;
  address: string;
  brand?: Brand;
}

function BoothDetailModal({ name, address, brand }: BoothDetailModalProps) {
  return (
    <Container>
      <TextContainer>
        <BoothName>{name}</BoothName>
        <Address>{address}</Address>
      </TextContainer>
      <ImageContainer>
        <Image src={brand?.logoUrl} alt={name} />
      </ImageContainer>
    </Container>
  );
}

export default BoothDetailModal;
