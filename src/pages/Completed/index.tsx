import { Task } from '../../components/Task';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';
import { Container, Content } from './styles';

export function Completed() {
  const { tasks } = useContext(TaskContext);

  const tasksCompleted = tasks.filter((task) => task.completed === true);

  // const tasksCompleted = tasks.map((task) => {
  //   if (task.completed === true) {
  //     return {
  //       id: task.id,
  //       description: task.description,
  //       completed: task.completed,
  //       created: task.created,
  //     };
  //   } else {
  //     return task;
  //   }
  // });
  return (
    <>
      <Container>
        <Content>
          {tasksCompleted.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </Content>
      </Container>
    </>
  );
}
