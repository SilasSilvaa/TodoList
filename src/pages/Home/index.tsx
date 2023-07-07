import { Container, Content } from './styles';
import { Task } from '../../components/Task';
import { TaskInputRenderer } from './components/TaskInputRenderer';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

export function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Content>
          {tasks.map((task) => {
            if (!task.completed) {
              return <Task key={task.id} data={task} />;
            }
          })}
        </Content>
        <TaskInputRenderer />
      </Container>
    </>
  );
}
