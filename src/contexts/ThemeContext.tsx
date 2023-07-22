import { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../styles/theme/default';

export const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ChildrenProps) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const currentTheme = localStorage.getItem('@theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  function toggleTheme() {
    if (theme === 'dark') {
      localStorage.setItem('@theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('@theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
