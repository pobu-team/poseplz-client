import type Theme from './Theme';

const darkTheme: Theme = {
  colors: {
    background: '#000',
    black: '#000',
    text: '#FFF',
    reverseText: '#000',
    layoutBackground: '#000',
    primary: '#BBFF65',
    secondary: '#333335',
    startButton: '#1F1E1F',
    border: '#BBFF65',
    buttonBackground: '#1E1E1F',
    detailButton: '#1E1E1F',
    randomButton: '#FFFFFF',
    arrowBackground: '#BBFF65',
    detailBackground: '#000',
    noImageText: '#9B9B9B',
    mainBackground: '#0f0f10',
    bannerBackground: '#333335',
    containerBackground: '#1f1e1f',
  },

  sizes: {
    layoutWidth: '430px',
    contentPadding: '2.4rem',
    contentBorderRadius: '8rem',
    smallContentPadding: '1.2rem',
  },

  img: {
    check: 'images/check-dark.png',
    splash: 'images/bg_splash_dark.png',
  },
};

export default darkTheme;
