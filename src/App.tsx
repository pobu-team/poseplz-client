import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useReadLocalStorage } from 'usehooks-ts';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

const router = createBrowserRouter(routes);

export default function App() {
  const isDarkMode = useReadLocalStorage('darkMode');

  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
