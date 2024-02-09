import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }

  p, button, span {
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  .no-scroll {
    overflow: hidden;
  }  

  *{
    box-sizing: border-box;
    outline: none;
  }
`;

export default GlobalStyle;
