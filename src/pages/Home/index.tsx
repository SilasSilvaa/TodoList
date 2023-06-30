import { Container, Content } from './styles';
import { Task } from '../../components/Task';
import { TaskInputRenderer } from './components/TaskInputRenderer';
import { LinkRedirect } from '../../components/LinkRedirect';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <LinkRedirect />
        <Content>
          {/* {tasks.length > 0 ? (
            tasks.map(
              (task) => !task.completed && <Task key={task.id} data={task} />
            )
          ) : (
            <span>Sem Tarefas...</span>
          )} */}

          <Task />
        </Content>
        <TaskInputRenderer />
      </Container>
    </>
  );
}
