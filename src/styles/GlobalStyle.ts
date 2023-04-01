import {createGlobalStyle} from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-family: 'Pretendard-Regular', -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  p, button, span {
    font-family: 'Pretendard-Regular';
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  @media (max-width: 768px) {
  /* 모바일 화면 스타일 */
  .nav-menu {
    display: none;
  }
  .nav-toggle {
    display: block;
  }
}
`;

export default GlobalStyle;
