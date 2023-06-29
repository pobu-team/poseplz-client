import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import dragScroll from '../../utils/dragScroll';
import { Container, Content, Header } from './PoseSlider.styles';
import { PoseWithIdSelector } from '../../recoil/poseState';
import { PoseInfo } from '../../types/PoseType';

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

  const [isClick, setIsClick] = useState(false);

  const { dragStart, dragging, dragStop } = dragScroll({ ref, setIsClick });

  useEffect(() => {
    const element = ref.current!;
    element.addEventListener('mousedown', dragStart);
    element.addEventListener('mousemove', dragging);
    element.addEventListener('mouseup', dragStop);
    window.addEventListener('mousemove', dragging);
    window.addEventListener('mouseup', dragStop);

    return () => {
      element.removeEventListener('mousedown', dragStart);
      element.removeEventListener('mousemove', dragging);
      element.removeEventListener('mouseup', dragStop);
      window.removeEventListener('mousemove', dragging);
      window.removeEventListener('mouseup', dragStop);
    };
  }, []);

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
            return (
              <button
                key={poseId}
                type="button"
                onClick={() => handleClick(poseId)}
              >
                <img src={`https://server.poseplz.com${imageSrc}`} alt={imageSrc} />
              </button>
            );
          })}
        </Content>
      </Container>
    </OuterContainer>
  );
}
