import { Container, Content } from './styles';
import { Task } from '../../components/Task';
import { TaskInputRenderer } from './components/TaskInputRenderer';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

export function Home() {
  const { tasks } = useContext(TaskContext);

  const taskIsProgress = tasks.filter((task) => {
    if (!task.completed) {
      return {
        id: task.id,
        description: task.description,
        created: task.created,
        completed: task.completed,
      };
    }
  });

  return (
    <>
      <Container>
        <Content>
          {taskIsProgress.length > 0 ? (
            taskIsProgress.map((task) => <Task key={task.id} data={task} />)
          ) : (
            <span>Sem tarefas em andamento...</span>
          )}
        </Content>
        <TaskInputRenderer />
      </Container>
    </>
  );
}
