import { Outlet } from 'react-router-dom';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { LinkRedirect } from '../../components/LinkRedirect';

export function Layout() {
  return (
    <>
      <Container>
        <Content>
          <Header />
          <LinkRedirect />
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
