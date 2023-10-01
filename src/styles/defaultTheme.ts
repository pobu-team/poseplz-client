import { darkThemeColors, lightThemeColors } from './colors';

const defaultTheme = {
  colors: {
    background: lightThemeColors.BACKGROUND.PRIMARY,
    black: lightThemeColors.BLACK,
    text: lightThemeColors.BLACK,
    reverseText: lightThemeColors.WHITE,
    layoutBackground: '#F1F3F5',
    primary: lightThemeColors.PRIMARY.NORMAL,
    secondary: '#DEFFB4',
    startButton: lightThemeColors.PRIMARY.NORMAL,
    border: lightThemeColors.PRIMARY.NORMAL,
    buttonBackground: lightThemeColors.BACKGROUND.SECONDARY,
    detailButton: lightThemeColors.BACKGROUND.PRIMARY,
    randomButton: lightThemeColors.BLACK,
    arrowBackground: lightThemeColors.BACKGROUND.PRIMARY,
    detailBackground: lightThemeColors.BACKGROUND.SECONDARY,
    disabledText: lightThemeColors.TEXT.ALTERNATIVE,
    navDisabledText: '#BDBDC8',
    mainBackground: lightThemeColors.BACKGROUND.SECONDARY,
    bannerBackground: '#DFDFE9',
    categoryBackground: lightThemeColors.BACKGROUND.TERTIARY,
    myPageHeader: lightThemeColors.BACKGROUND.PRIMARY,
    lightContNormal: '#1F1F1F',
    containerBackground: lightThemeColors.BACKGROUND.PRIMARY,
    splashBackground: '#F9FFEA',
    message: '#1F1E1F',
    subMessage: lightThemeColors.TEXT.ALTERNATIVE,
    modalBackground: lightThemeColors.BACKGROUND.PRIMARY,
    modalCloseButtonBackground: lightThemeColors.BACKGROUND.TERTIARY,
    divideLineBackground: darkThemeColors.BACKGROUND.TERTIARY,
  },

  sizes: {
    layoutWidth: '430px',
    contentPadding: '2.4rem',
    contentBorderRadius: '8rem',
    smallContentPadding: '1.2rem',
  },

  img: {
    splash: 'images/bg_splash.png',
  },
};

export default defaultTheme;
