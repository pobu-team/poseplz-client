import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dragScroll from '../../utils/dragScroll';
import { Container, Content, Header } from './PoseSlider.styles';

const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.containerBackground};
  padding: ${(props) => props.theme.sizes.contentPadding};
  margin-bottom: 12px;
`;

export default function PoseSlider({ title, imgArr }: {
  title: string;
  imgArr: string[];
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

  const handleClick = (item: string) => {
    if (!isClick) {
      return;
    }
    const fileId = item.split('/').pop();
    navigate(`/pose/detail?imageSrc=${fileId}`);
  };

  return (
    <OuterContainer>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Container>
        <Content ref={ref}>
          {imgArr.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                handleClick(item);
              }}
            >
              <img src={`https://server.poseplz.com${item}`} alt={item} />
            </button>
          ))}
        </Content>
      </Container>
    </OuterContainer>
  );
}
