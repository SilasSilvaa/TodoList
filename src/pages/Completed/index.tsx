import { useContext } from 'react';
import { Task } from '../../components/Task';
import { TaskContext } from '../../contexts/TaskContexts';
import { Container, Content } from './styles';

export function Completed() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Content>
          {tasks.map((task) => {
            if (task.completed) {
              return <Task key={task.id} data={task} />;
            } else {
              <>
                <span>Sem tarefas concluidas...</span>
              </>;
            }
          })}
        </Content>
      </Container>
    </>
  );
}
