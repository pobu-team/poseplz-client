import type Theme from './Theme';
import { darkThemeColors } from './colors';

const darkTheme: Theme = {
  colors: {
    background: darkThemeColors.BACKGROUND.PRIMARY,
    backgroundSecondary: darkThemeColors.BACKGROUND.SECONDARY,
    backgroundTertiary: darkThemeColors.BACKGROUND.TERTIARY,
    black: darkThemeColors.BLACK,
    text: darkThemeColors.WHITE,
    textNormal: darkThemeColors.TEXT.NORMAL,
    textAlternative: darkThemeColors.TEXT.ALTERNATIVE,
    reverseText: darkThemeColors.BLACK,
    layoutBackground: darkThemeColors.BLACK,
    primary: darkThemeColors.PRIMARY.NORMAL,
    secondary: darkThemeColors.BACKGROUND.TERTIARY,
    startButton: '#1F1E1F',
    detailButton: darkThemeColors.BACKGROUND.SECONDARY,
    arrowBackground: darkThemeColors.PRIMARY.NORMAL,
    detailBackground: darkThemeColors.BLACK,
    navDisabledText: '#707075',
    mainBackground: darkThemeColors.BACKGROUND.PRIMARY,
    bannerBackground: darkThemeColors.BACKGROUND.TERTIARY,
    containerBackground: '#1F1E1F',
    lightContNormal: '#1F1F1F',
    splashBackground: '#F2F2F7',
    message: darkThemeColors.WHITE,
    modalCloseButtonBackground: '#1F1E1F',
    lineNormal: darkThemeColors.LINE.NORMAL,
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

export default darkTheme;
