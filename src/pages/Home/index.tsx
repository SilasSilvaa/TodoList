import { useContext } from 'react';
import { Container, Content } from './styles';
import { TaskContext } from '../../contexts/TaskContexts';
import { Task } from '../../components/Task';
import { Search } from './components/Search';

export function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Content>
          {tasks.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </Content>
        <Search />
      </Container>
    </>
  );
}
