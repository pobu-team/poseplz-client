import styled from 'styled-components';
import BackButton from './BackButton';

const Container = styled.div`
  display: flex;
  padding-block: 2rem;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.detailBackground};
  padding-inline: ${props => props.theme.sizes.contentPadding};
`;

const HeadingText = styled.h1`
  display: flex;
  margin: 10px 30px 10px 0;
  font-size: 20px;
  font-weight: 600;
 `;

export default function DetailHeader() {
	return (
		<Container>
			<BackButton />
			<HeadingText>이 포즈로 사진을 찍어보세요 !</HeadingText>
		</Container>
	);
}

