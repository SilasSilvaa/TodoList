import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './global';
import { TaskContextProvider } from './contexts/TaskContexts';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TaskContextProvider>
          <Router />
        </TaskContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
