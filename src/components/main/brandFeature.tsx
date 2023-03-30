import {useState} from 'react';
import styled, {type StyledComponent} from 'styled-components';

type ContainerProps = {
	translateX: number;
};

const Container = styled.div<ContainerProps>`
  height: 200px;
  margin: 20px 10px;
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
      cursor: pointer;
    }
  }

  div:nth-of-type(2){
    transform: translate(calc(-200px * ${props => props.translateX}), 0);
    transition: transform 0.5s;
    padding: 20px;
    width: 1200px;
    height: 150px;
  }

  img {
    height: 130px;
    margin: 5px;
  }
`;

export default function BrandFeature() {
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
				<h1>브랜드별 특징</h1>
				<button type='button' onClick={handleClickRight}>{'<'}</button>
				<button type='button' onClick={handleClickLeft}>{'>'}</button>
			</div>
			<div>
				{[1, 2, 3, 4, 5, 6].map(item => (
					<img key={item} src='/images/haru.png' alt='sample2'/>
				))}
			</div>
		</Container>
	);
}
