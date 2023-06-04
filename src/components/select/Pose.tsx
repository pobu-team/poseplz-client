import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';

type PoseProps = {
	imageSrc: string;
	active: boolean;
};

const Container = styled.div`
	position: relative;
	margin: 10px 5px 10px 5px;

  img {
		border-radius: 30px;
		width: 100%;
		height: auto;
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

export default function Pose({ imageSrc, active }: PoseProps) {
  const linkTo = `/pose/detail?imageSrc=${imageSrc}`;

  const [like, setLike] = useLocalStorage<string[]>('pose-store', []);

  const handleClickLike = (imageSrc: string) => {
    if (like.includes(imageSrc)) {
      const removedLike = like.filter((item) => item !== imageSrc);
      setLike(removedLike);
      return;
    }

    setLike([...like, imageSrc]);
  };

  return (
    <Container>
      <Link to={linkTo}>
        <img src={`https://server.poseplz.com/api/v1/files/${imageSrc}`} alt={imageSrc} />
      </Link>
      <button
        type="button"
        onClick={() => {
          handleClickLike(imageSrc);
        }}
      >
        <img
          src={active ? '/images/btn_like_active.svg' : '/images/btn_like_default.svg'}
          alt="btn_like"
        />
      </button>
    </Container>
  );
}
