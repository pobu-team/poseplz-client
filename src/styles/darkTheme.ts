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
    disabledText: '#9B9B9B',
    navDisabledText: '#707075',
    mainBackground: '#0F0F10',
    bannerBackground: '#333335',
    categoryBackground: '#333335',
    myPageHeader: '#0F0F10',
    containerBackground: '#1F1E1F',
    splashBackground: '#F2F2F7',
    message: '#FFFFFF',
    subMessage: '#9B9B9B',
    modalBackground: '#0F0F10',
  },

  sizes: {
    layoutWidth: '430px',
    contentPadding: '2.4rem',
    contentBorderRadius: '8rem',
    smallContentPadding: '1.2rem',
  },

  img: {
    splash: 'images/bg_splash_dark.png',
  },
};

export default darkTheme;
