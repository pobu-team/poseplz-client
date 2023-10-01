import type Theme from './Theme';
import { darkThemeColors } from './colors';

const darkTheme: Theme = {
  colors: {
    background: darkThemeColors.BACKGROUND.SECONDARY,
    black: darkThemeColors.BLACK,
    text: darkThemeColors.WHITE,
    reverseText: darkThemeColors.BLACK,
    layoutBackground: darkThemeColors.BLACK,
    primary: darkThemeColors.PRIMARY.NORMAL,
    secondary: darkThemeColors.BACKGROUND.TERTIARY,
    startButton: '#1F1E1F',
    border: darkThemeColors.PRIMARY.NORMAL,
    buttonBackground: darkThemeColors.BACKGROUND.PRIMARY,
    detailButton: darkThemeColors.BACKGROUND.PRIMARY,
    randomButton: darkThemeColors.WHITE,
    arrowBackground: darkThemeColors.PRIMARY.NORMAL,
    detailBackground: darkThemeColors.BLACK,
    disabledText: darkThemeColors.TEXT.ALTERNATIVE,
    navDisabledText: '#707075',
    mainBackground: darkThemeColors.BACKGROUND.SECONDARY,
    bannerBackground: darkThemeColors.BACKGROUND.TERTIARY,
    categoryBackground: darkThemeColors.BACKGROUND.TERTIARY,
    myPageHeader: darkThemeColors.BACKGROUND.SECONDARY,
    containerBackground: '#1F1E1F',
    lightContNormal: '#1F1F1F',
    splashBackground: '#F2F2F7',
    message: darkThemeColors.WHITE,
    subMessage: darkThemeColors.TEXT.ALTERNATIVE,
    modalBackground: darkThemeColors.BACKGROUND.SECONDARY,
    modalCloseButtonBackground: '#1F1E1F',
    divideLineBackground: darkThemeColors.BACKGROUND.TERTIARY,
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
