import { Task } from '../../components/Task';
import { Container, Content } from './styles';

export function Completed() {
  return (
    <>
      <Container>
        <Content>
          <Task />
        </Content>
      </Container>
    </>
  );
}
