import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Container, Content, Header } from './PoseSlider.styles';
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
  const [isLoading, setIsLoading] = useState(true);
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
        <Content ref={ref} active={!isLoading}>
          {poseArr.map((poseId: string) => {
            const poseInfo: PoseInfo = useRecoilValue(PoseWithIdSelector(poseId));
            const imageSrc = poseInfo.imageUrl;
            return (
              <button
                key={poseId}
                type="button"
                onClick={() => handleClick(poseId)}
              >
                <img
                  src={`https://server.poseplz.com${imageSrc}`}
                  alt={imageSrc}
                  onLoad={() => setIsLoading(false)}
                />
              </button>
            );
          })}
        </Content>
      </Container>
    </OuterContainer>
  );
}
