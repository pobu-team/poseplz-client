import {useEffect, useRef, useState} from 'react';

import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';
import dragScroll from '../../utils/dragScroll';

const Container = styled.div`
  height: 300px;
  margin: 0 0 20px 0;
  max-width: 1200px;
  overflow: scroll;
	cursor: grab;

  ::-webkit-scrollbar {
    width: 0;
		height: 0;
  }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    
    h1 {
      flex: 30;
      font-size: 24px;
      font-weight: bold;
    }
`;

const Content = styled.div`
  height: 300px;
  width: auto;
  align-items: center;
  white-space: nowrap;
  display: flex;
  overflow: scroll;
  scroll-snap-type: none;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
		display: none;
	}
  
  a {
		height: 90%;
		cursor: pointer;

		img {
			height: 100%;
			border-radius: 8px;
			width: auto;
			margin: 2px;
		}
  }
`;

export default function PoseSlider({title, imgArr}: {
	title: string;
	imgArr: string[];
}) {
	const navigate = useNavigate();

	const ref = useRef<HTMLDivElement>(null);

	const [isClick, setIsClick] = useState(false);

	const {dragStart, dragging, dragStop} = dragScroll({ref, setIsClick});

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

	const handleClick = (index: number) => {
		if (!isClick) {
			return;
		}

		navigate(`/pose/detail?imageSrc=/images/${imgArr[index]}.png`);
	};

	return (
		<div>
			<Header>
				<h1>{title}</h1>
			</Header>
			<Container>
				<Content ref={ref}>
					{[1, 2, 3, 4, 5, 6].map((item, index) => (
						<a key={item} onClick={() => {
							handleClick(index);
						}}>
							<img src={`/images/${imgArr[index]}.png`} alt={imgArr[index]}/>
						</a>
					))}
				</Content>
			</Container>
		</div>
	);
}
