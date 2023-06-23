import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import styled, { keyframes } from 'styled-components';

type ContainerProps = {
  currentImage: string;
  isAnimating: boolean;
};

type StartButtonProps = {
  currentImageIndex: number;
};

const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.png',
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.main<ContainerProps>`
  margin: auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-image: url(${(props) => props.currentImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: ${(props) => (props.isAnimating ? fadeOut : fadeIn)} 1s ease-in-out;
  animation-fill-mode: forwards;
`;

const StartButton = styled.button<StartButtonProps>`
  display: flex;
  width: 40vh;
  height: 7.5vh;
  font-size: 2.5vh;
  padding: 0;
  margin-bottom: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => ((props.currentImageIndex === 3) ? '#000' : '#FFF')};
  background-color: ${(props) => ((props.currentImageIndex === 3) ? props.theme.colors.primary : '#1F1E1F')};
`;

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate('/main');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container
      currentImage={images[currentImageIndex]}
      isAnimating={isAnimating}
    >
      <StartButton
        onClick={handleClickStart}
        currentImageIndex={currentImageIndex}
      >
        Get started
      </StartButton>
    </Container>
  );
}
