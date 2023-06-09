import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, Content } from './styles';
import { LinkRedirect } from '../../components/LinkRedirect';

export function Layout() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <LinkRedirect />
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
