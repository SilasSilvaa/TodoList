import { Outlet } from 'react-router-dom';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { LinkRedirect } from '../../components/LinkRedirect';
import { ModalDeleteTask } from '../../components/ModalDeleteTask';

import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

export function Layout() {
  const { toggle } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Content>
          <Header />
          <LinkRedirect />
          <Outlet />
        </Content>
        {toggle && <ModalDeleteTask />}
      </Container>
    </>
  );
}
