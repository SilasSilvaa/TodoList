import { Task } from '../../components/Task';
import { Container, Content } from './styles';
import { useTask } from '../../hooks/useTask';

export function Completed() {
  const { tasksAsFineshed } = useTask();

  console.log(tasksAsFineshed);

  return (
    <>
      <Container>
        <Content>
          {tasksAsFineshed.length > 0 ? (
            tasksAsFineshed.map((task) => <Task key={task.id} data={task} />)
          ) : (
            <span>Sem tarefas concluidas...</span>
          )}
        </Content>
      </Container>
    </>
  );
}
