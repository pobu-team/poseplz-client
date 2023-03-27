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
  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
  }
  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
