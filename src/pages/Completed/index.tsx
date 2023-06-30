import { Tasks } from '../../components/Tasks';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';
import { Container, Content } from './styles';
import { LinkRedirect } from '../../components/LinkRedirect';
import { Header } from '../../components/Header';

export function Completed() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Header />
        <LinkRedirect />
        <Content>
          {tasks.length > 0 ? (
            tasks.map((task) => task.completed && <Tasks />)
          ) : (
            <span>Sem tarefas concluidas...</span>
          )}
        </Content>
      </Container>
    </>
  );
}
