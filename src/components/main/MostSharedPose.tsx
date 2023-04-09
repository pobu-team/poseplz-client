import {useState} from 'react';

import styled from 'styled-components';

import makeRandomImageSrc from '../../utils/random';

type ContainerProps = {
	translateX: number;
};

const Container = styled.div<ContainerProps>`
  height: 300px;
  margin: 40px 0 20px 0;
  overflow: hidden;

  div:nth-of-type(1){
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
      flex: 30;
      font-size: 24px;
      font-weight: bold;
    }

    button {
      flex: 1;
      background: none;
      border: none;
      font-size: 20px;
      color: ${props => props.theme.colors.text};
      cursor: pointer;
    }
  }

  div:nth-of-type(2){
    display: flex;
    transform: translate(calc(-130px * ${props => props.translateX}), 0);
    transition: transform 0.5s;
    padding: 20px 0;
    height: 100%;
    width: fit-content;
  }

  img {
    height: 100%;
    margin: 5px;
    border-radius: 10px;
  }
`;

const imgArr = makeRandomImageSrc();

export default function MostSharedPose() {
	const [translateX, setTranslateX] = useState(1);

	const handleClickLeft = () => {
		if (translateX >= 3) {
			return;
		}

		setTranslateX(translateX + 1);
	};

	const handleClickRight = () => {
		if (translateX <= 0) {
			return;
		}

		setTranslateX(translateX - 1);
	};

	return (
		<Container translateX={translateX}>
			<div>
				<h1>오늘의 추천 포즈에요!</h1>
				<button type='button' onClick={handleClickRight}>{'<'}</button>
				<button type='button' onClick={handleClickLeft}>{'>'}</button>
			</div>
			<div>
				{[1, 2, 3, 4, 5, 6].map((item, index) => (
					<img key={item} src={`/images/${imgArr[index]}.png`} alt={imgArr[index]}/>
				))}
			</div>
		</Container>
	);
}
