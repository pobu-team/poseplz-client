import {useState} from 'react';
import styled from 'styled-components';

type ContainerProps = {
	translateX: number;
};

const Container = styled.div<ContainerProps>`
  height: 300px;
  margin: 40px 0 20px 0;
  overflow: hidden;

  div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    
    h1 {
      flex: 30;
      font-size: 23px;
      font-weight: 600;
    }

    button {
      flex: 1;
      background: none;
      border: none;
      color: ${props => props.theme.colors.text};
      cursor: pointer;
    }
  }

  div:nth-of-type(2){
    transform: translate(calc(-150px * ${props => props.translateX}), 0);
    transition: transform 0.5s;
    padding: 20px;
    width: 1200px;
    height: 100%;
  }

  img {
    height: 100%;
    margin: 5px;
    border-radius: 20px;
  }
`;

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

	const imgArr = ['1-1', '2-1', '2-5', '2-9', '2-7', '2-11'];

	return (
		<Container translateX={translateX}>
			<div>
				<h1>🤩 오늘의 추천 포즈에요!</h1>
				<button type='button' onClick={handleClickRight}>{'<'}</button>
				<button type='button' onClick={handleClickLeft}>{'>'}</button>
			</div>
			<div>
				{[1, 2, 3, 4, 5, 6].map((item, index) => (
					<img key={item} src={`/images/${imgArr[index]}.png`} alt='??'/>
				))}
			</div>
		</Container>
	);
}
