import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useLocalStorage} from 'usehooks-ts';

const Container = styled.div`
		position: relative;
    width: 50%;
    img {
      border-radius: 30px;
      width: 100%;
      height: 100%;
      padding: 5px;
    }
    button {
      bottom: 20px;
		  font-size: 25px;
		  right: 0;
      position: absolute;
      border: none;
      background: none;
		  cursor: pointer;
    }
`;

type PoseProps = {
	imageSrc: string;
	active: boolean;
};

export default function Pose({imageSrc, active}: PoseProps) {
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
				{active ? '💗' : '🤍'}
			</button>
		</Container>
	);
}
