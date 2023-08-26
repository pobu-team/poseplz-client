import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import ReactGA from 'react-ga4';
import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

const router = createBrowserRouter(routes);

export default function App() {
  const isDarkMode = useReadLocalStorage('darkMode');
  const theme = isDarkMode ? darkTheme : defaultTheme;

  if (!window.location.href.includes('localhost')
    && (!window.location.href.includes('pobu-pose-recommend.vercel.app'))) {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID ?? '');
  }

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
