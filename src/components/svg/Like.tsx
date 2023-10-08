import { useReadLocalStorage } from 'usehooks-ts';
import { LikeButtonType } from '../../types/LikePose';

type LikeType = {
  active: boolean;
  type: LikeButtonType;
}

export default function Like({ active, type }: LikeType) {
  const isDarkMode = useReadLocalStorage('darkMode');

  if (type === 'DEFAULT') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="19.5" fill="#1F1E1F" stroke="#36373B" />
        <g filter="url(#filter0_i_1025_1918)">
          <path d="M24 18.3887C22.9528 17.443 21.5804 16.9464 20.1751 17.0046C18.7698 17.0628 17.4425 17.6713 16.476 18.7005C15.5095 19.7296 14.9801 21.0981 15.0006 22.5146C15.021 23.931 15.5897 25.2834 16.5855 26.2839L22.7281 32.4695C23.0655 32.8092 23.523 33 24 33C24.477 33 24.9345 32.8092 25.2719 32.4695L31.4145 26.2839C32.4103 25.2834 32.979 23.931 32.9994 22.5146C33.0199 21.0981 32.4905 19.7296 31.524 18.7005C30.5575 17.6713 29.2302 17.0628 27.8249 17.0046C26.4196 16.9464 25.0472 17.443 24 18.3887Z" fill={active ? '#8EED15' : '#707075'} />
        </g>
        <defs>
          <filter id="filter0_i_1025_1918" x="15" y="17" width="18" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1025_1918" />
          </filter>
        </defs>
      </svg>

    );
  }

  const circleFill = isDarkMode ? '#1F1E1F' : 'white';
  const circleStroke = isDarkMode ? '#36373B' : '#F2F2F7';
  // eslint-disable-next-line no-nested-ternary
  const pathFill = active ? '#8EED15' : isDarkMode ? '#707075' : '#EAEAF2';

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="19.5" fill={circleFill} stroke={circleStroke} />
      <g filter="url(#filter0_i_896_4099)">
        <path
          d="M24 18.3887C22.9528 17.443 21.5804 16.9464 20.1751 17.0046C18.7698 17.0628 17.4425 17.6713 16.476 18.7005C15.5095 19.7296 14.9801 21.0981 15.0006 22.5146C15.021 23.931 15.5897 25.2834 16.5855 26.2839L22.7281 32.4695C23.0655 32.8092 23.523 33 24 33C24.477 33 24.9345 32.8092 25.2719 32.4695L31.4145 26.2839C32.4103 25.2834 32.979 23.931 32.9994 22.5146C33.0199 21.0981 32.4905 19.7296 31.524 18.7005C30.5575 17.6713 29.2302 17.0628 27.8249 17.0046C26.4196 16.9464 25.0472 17.443 24 18.3887Z"
          fill={pathFill}
        />
      </g>
      <defs>
        <filter id="filter0_i_896_4099" x="15" y="17" width="18" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_896_4099" />
        </filter>
      </defs>
    </svg>

  );
}
