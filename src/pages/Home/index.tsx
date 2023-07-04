import { Container, Content } from './styles';
import { Task } from '../../components/Task';
import { TaskInputRenderer } from './components/TaskInputRenderer';

export function Home() {
  return (
    <>
      <Container>
        <Content>
          <Task />
        </Content>
        <TaskInputRenderer />
      </Container>
    </>
  );
}
