import styled from 'styled-components';
import shareKaKao from '../../utils/share';

type PoseDetailProps = {
	imageSrc: string | undefined;
	onClickBack: () => void;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 700px;

  div:first-child {
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
		width: 90%;
		height: 100%;
		background-color: ${props => props.theme.colors.detailButton};
		
		img {
			padding: 20px 0;
			display: flex;
			width: 50%;
			height: 100%;
		}
	}

`;

const ButtonContainer = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;

	button{
		cursor: pointer;
		font-size: 17px;
		font-weight: 600;
		border-radius: 10px;
		border: none;
		width: 180px;
		height: 60px;
		margin-top: 50px;
		color: ${props => props.theme.colors.text};
		background: ${props => props.theme.colors.detailButton};
	}
`;

export default function PoseDetail({imageSrc, onClickBack}: PoseDetailProps) {
	return (
		<Container>
			<div>
				<img src={imageSrc} alt={imageSrc} />
			</div>
			<ButtonContainer>
				<button type='button' onClick={() => {
					shareKaKao(`/pose/detail?imageSrc=${imageSrc ?? ''}`);
				}}>포즈 공유하기</button>
				<button type='button' onClick={onClickBack}>홈으로 이동하기</button>
			</ButtonContainer>
		</Container>
	);
}
