import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { SvgNotFound } from '../../components/SvgNotfound/SvgNotFound';
import { Container, Content, SvgContent } from './styles';

export function NotFound() {
  return (
    <>
      <Container>
        <SvgContent>
          <SvgNotFound />
        </SvgContent>
        <Content>
          <h1>Pagina não encontrada</h1>
          <Link to={'/'}>
            <Button colorButton="default">Voltar</Button>
          </Link>
        </Content>
      </Container>
    </>
  );
}
