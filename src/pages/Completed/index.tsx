import { Task } from '../../components/Task';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { LinkRedirect } from '../../components/LinkRedirect';

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
        <Header />
        <LinkRedirect />
        <Content>
          {tasksCompleted.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </Content>
      </Container>
    </>
  );
}
