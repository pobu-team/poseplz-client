import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Container, Content, PoseButton,
} from './PoseSlider.styles';
import { PoseInfo } from '../../types/PoseType';
import useDragScroll from '../../hooks/useDragScroll';
import PoseContainerTitle from './PoseContainerTitle';

const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.containerBackground};
  padding: ${(props) => props.theme.sizes.contentPadding};
`;

export default function PoseSlider({ title, poseArr }: {
  title: string;
  poseArr: PoseInfo[];
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
      <PoseContainerTitle title={title} />
      <Container>
        <Content ref={ref}>
          {poseArr.map((pose) => {
            const { poseId, file, thumbnailImageUrl } = pose;
            const { width, height } = file;
            return (
              <PoseButton
                key={poseId}
                active
                width={width}
                height={height}
                type="button"
                onClick={() => handleClick(poseId)}
              >
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}${thumbnailImageUrl}`}
                  alt={thumbnailImageUrl}
                />
              </PoseButton>
            );
          })}
        </Content>
      </Container>
    </OuterContainer>
  );
}
