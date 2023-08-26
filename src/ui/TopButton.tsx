import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import addGaEvent from '../utils/addGaEvent';

const Container = styled.div`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  right: 1.6rem;
`;

const Button = styled.button`
  position: fixed;
  bottom: 9rem;
  z-index: 99;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;

  svg {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export default function TopButton() {
  const isDarkMode = useReadLocalStorage('darkMode');

  const handleTopButtonClick = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    addGaEvent('Top Button');
  };

  return (
    <Container>
      <Button onClick={handleTopButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
          <g filter="url(#filter0_d_657_3627)">
            <circle cx="28" cy="26" r="24" fill={isDarkMode ? 'black' : 'white'} />
          </g>
          <path fillRule="evenodd" clipRule="evenodd" d="M22.5494 26L20.875 24.2874L28 17L35.125 24.2874L33.4506 26L29.125 21.5854L29.125 35H26.875L26.875 21.5854L22.5494 26Z" fill={isDarkMode ? 'white' : 'black'} />
          <defs>
            <filter id="filter0_d_657_3627" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_657_3627" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_657_3627" result="shape" />
            </filter>
          </defs>
        </svg>
      </Button>
    </Container>
  );
}
