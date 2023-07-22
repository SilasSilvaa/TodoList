import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './global';
import { TaskContextProvider } from './contexts/TaskContexts';
import { ToastContainer } from 'react-toastify';

import { ThemeContextProvider } from './contexts/ThemeContext';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <TaskContextProvider>
          <Router />
        </TaskContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </ThemeContextProvider>
  );
}
