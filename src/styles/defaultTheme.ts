import { lightThemeColors } from './colors';

const defaultTheme = {
  colors: {
    background: lightThemeColors.BACKGROUND.PRIMARY,
    backgroundSecondary: lightThemeColors.BACKGROUND.SECONDARY,
    backgroundTertiary: lightThemeColors.BACKGROUND.TERTIARY,
    black: lightThemeColors.BLACK,
    text: lightThemeColors.BLACK,
    textNormal: lightThemeColors.TEXT.NORMAL,
    textAlternative: lightThemeColors.TEXT.ALTERNATIVE,
    reverseText: lightThemeColors.WHITE,
    layoutBackground: '#F1F3F5',
    primary: lightThemeColors.PRIMARY.NORMAL,
    secondary: '#DEFFB4',
    startButton: lightThemeColors.PRIMARY.NORMAL,
    detailButton: lightThemeColors.BACKGROUND.PRIMARY,
    arrowBackground: lightThemeColors.BACKGROUND.PRIMARY,
    detailBackground: lightThemeColors.BACKGROUND.SECONDARY,
    navDisabledText: '#BDBDC8',
    mainBackground: lightThemeColors.BACKGROUND.SECONDARY,
    bannerBackground: '#DFDFE9',
    containerBackground: lightThemeColors.BACKGROUND.PRIMARY,
    splashBackground: '#F9FFEA',
    message: '#1F1E1F',
    modalCloseButtonBackground: lightThemeColors.BACKGROUND.TERTIARY,
    lineNormal: lightThemeColors.LINE.NORMAL,
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
