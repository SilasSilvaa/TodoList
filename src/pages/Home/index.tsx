import { Container, Content } from './styles';
import { Tasks } from '../../components/Tasks';
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

          <Tasks />
        </Content>
        <TaskInputRenderer />
      </Container>
    </>
  );
}
