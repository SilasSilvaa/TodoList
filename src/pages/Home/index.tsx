import { Task } from '../../components/Task';
import { Container, Content } from './styles';
import { TaskInputRenderer } from './components/TaskInputRenderer';

import { useTask } from '../../hooks/useTask';

export function Home() {
  const { taskIsProgress } = useTask();

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
