import { NavLink } from 'react-router-dom';
import { LinkPage, MoonIcon, SunIcon, SwitchContent } from './styles';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function LinkRedirect() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <LinkPage>
        <NavLink to={'/'}>Tarefas em andamento</NavLink>
        <NavLink to={'/completed'}>Tarefas completadas</NavLink>
        <SwitchContent>
          <div onClick={toggleTheme}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </div>
        </SwitchContent>
      </LinkPage>
    </>
  );
}
