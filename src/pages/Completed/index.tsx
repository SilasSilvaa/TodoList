import { useContext } from 'react';
import { Task } from '../../components/Task';
import { TaskContext } from '../../contexts/TaskContexts';
import { Container, Content } from './styles';

export function Completed() {
  const { tasks } = useContext(TaskContext);

  const taskAsFineshed = tasks.filter((task) => {
    if (task.completed) {
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
          {taskAsFineshed.length > 0 ? (
            taskAsFineshed.map((task) => <Task key={task.id} data={task} />)
          ) : (
            <span>Sem tarefas concluidas...</span>
          )}
        </Content>
      </Container>
    </>
  );
}
