import { useContext } from 'react';
import { Container, Content } from './styles';
import { TaskContext } from '../../contexts/TaskContexts';
import { Task } from '../../components/Task';
import { Search } from './components/Search';
import { LinkRedirect } from '../../components/LinkRedirect';
import { Header } from '../../components/Header';

export function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Container>
        <Header />
        <LinkRedirect />
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
