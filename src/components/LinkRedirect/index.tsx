import { NavLink } from 'react-router-dom';
import { LinkPage, SwitchContent } from './styles';

export function LinkRedirect() {
  return (
    <>
      <LinkPage>
        <NavLink to={'/'}>Tarefas em andamento</NavLink>
        <NavLink to={'/completed'}>Tarefas completadas</NavLink>
        <SwitchContent>
          <button>Switch</button>
        </SwitchContent>
      </LinkPage>
    </>
  );
}
