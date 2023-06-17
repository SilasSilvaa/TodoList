import { Outlet } from 'react-router-dom';
import { Container, Content } from './styles';

export function Layout() {
  return (
    <>
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
