import styled from 'styled-components';
import moveHome from '../../utils/moveHome';
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
	padding: 20px;
	background-color: ${props => props.theme.colors.detailBackground};

  div:first-child {
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: ${props => props.theme.colors.detailButton};
		
		img {
			padding: 20px 20px;
			display: flex;
			max-width: 300px;
			max-height: 600px;
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
		margin: 50px 4px 0 4px;
		color: ${props => props.theme.colors.text};
		background: ${props => props.theme.colors.detailButton};
	}

	button:last-child {
		color: ${props => props.theme.colors.black};
		background: ${props => props.theme.colors.primary};
	}
`;

export default function PoseDetail({imageSrc, onClickBack}: PoseDetailProps) {
	moveHome();
	return (
		<Container>
			<div>
				<img src={imageSrc} alt={imageSrc} />
			</div>
			<ButtonContainer>
				<button type='button' onClick={onClickBack}>포즈 더 추천받기</button>
				<button type='button' onClick={() => {
					shareKaKao(`/pose/detail?imageSrc=${imageSrc ?? ''}`);
				}}>포즈 공유하기</button>
			</ButtonContainer>
		</Container>
	);
}
