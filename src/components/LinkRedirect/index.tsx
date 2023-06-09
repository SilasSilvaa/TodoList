import { NavLink } from 'react-router-dom';
import { LinkPage } from './styles';

export function LinkRedirect() {
  return (
    <>
      <LinkPage>
        <NavLink to={'/'}>Tarefas em andamento</NavLink>
        <NavLink to={'/completed'}>Tarefas completadas</NavLink>
      </LinkPage>
    </>
  );
}
