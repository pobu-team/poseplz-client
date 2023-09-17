import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import {
  Container, Content, Header, PoseButton,
} from './PoseSlider.styles';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';
import useDragScroll from '../../hooks/useDragScroll';

const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.containerBackground};
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-bottom: 12px;
`;

export default function PoseSlider({ title, poseArr }: {
  title: string;
  poseArr: string[];
}) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const isClick = useDragScroll(ref);

  const handleClick = (poseId: string) => {
    if (!isClick) {
      return;
    }
    navigate(`/pose/detail?poseId=${poseId}`);
  };

  return (
    <OuterContainer>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Container>
        <Content ref={ref}>
          {poseArr.map((poseId: string) => {
            const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
            const imageSrc = poseInfo.imageUrl;
            const [isLoading, setIsLoading] = useState(true);
            return (
              <PoseButton
                key={poseId}
                active={!isLoading}
                width={poseInfo.file.width}
                height={poseInfo.file.height}
                type="button"
                onClick={() => handleClick(poseId)}
              >
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}${imageSrc}`}
                  alt={imageSrc}
                  onLoad={() => setIsLoading(false)}
                />
              </PoseButton>
            );
          })}
        </Content>
      </Container>
    </OuterContainer>
  );
}
