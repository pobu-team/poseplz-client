import styled, { ThemeProvider } from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';
import { Reset } from 'styled-reset';
import GlobalStyle from '../../styles/GlobalStyle';
import darkTheme from '../../styles/darkTheme';
import defaultTheme from '../../styles/defaultTheme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: #000;
  
  div{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    img {
      width: 13rem;
      height: 13rem;
    }
  }
`;

export default function Loading() {
  const isDarkMode = useReadLocalStorage('dark-mode');
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Container>
        <div>
          <img src="/images/loading.gif" alt="loading" />
        </div>
      </Container>
    </ThemeProvider>
  );
}
