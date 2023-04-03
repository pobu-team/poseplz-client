import {Link} from 'react-router-dom';

import styled from 'styled-components';

import {useLocalStorage} from 'usehooks-ts';

type PoseProps = {
	imageSrc: string;
	active: boolean;
};

const Container = styled.div`
	position: relative;
	margin: 10px 5px 10px 5px;
	height: 300px;

  img {
		border-radius: 30px;
		height: 100%;
		width: auto;
	}

	button {
		bottom: 10px;
		right: 0;
		position: absolute;
		border: none;
		background: none;
		cursor: pointer;
	}
`;

export default function MainPose({imageSrc, active}: PoseProps) {
	const linkTo = `/pose/detail?imageSrc=${imageSrc}`;

	const [like, setLike] = useLocalStorage<string[]>('pose-store', []);

	const handleClickLike = (imageSrc: string) => {
		if (like.includes(imageSrc)) {
			const removedLike = like.filter(item => item !== imageSrc);
			setLike(removedLike);
			return;
		}

		setLike([...like, imageSrc]);
	};

	return (
		<Container>
			<Link to={linkTo}>
				<img src={imageSrc} alt={imageSrc} />
			</Link>
			<button
				type='button'
				onClick={() => {
					handleClickLike(imageSrc);
				}}
			>
				<img
					src={active ? '/images/btn_like_active.svg' : '/images/btn_like_default.svg'}
					alt='btn_like'
				/>
			</button>
		</Container>
	);
}
