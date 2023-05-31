import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, Content, LinkPage } from './styles';

import { NavLink } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <LinkPage>
            <NavLink to={'/'}>Tarefas em andamento</NavLink>
            <NavLink to={'/completed'}>Tarefas completadas</NavLink>
          </LinkPage>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
