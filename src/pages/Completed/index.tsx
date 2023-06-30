import { Task } from '../../components/Task';
import { Container, Content } from './styles';
import { LinkRedirect } from '../../components/LinkRedirect';
import { Header } from '../../components/Header';

export function Completed() {
  return (
    <>
      <Container>
        <Header />
        <LinkRedirect />
        <Content>
          <Task />
        </Content>
      </Container>
    </>
  );
}
