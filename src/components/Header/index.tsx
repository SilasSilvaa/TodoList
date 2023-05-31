import { Container, Content, SubmitButton, TextHeader } from './styles';
import { PlusCircle } from 'phosphor-react';

import { ClipboardText } from 'phosphor-react';

export function Header() {
  return (
    <>
      <Container>
        <TextHeader>
          <ClipboardText size={35} />
          <h1>TodoList</h1>
        </TextHeader>

        <Content>
          <input type="text" placeholder="Digite a tarefa..." />
          <SubmitButton>
            Criar
            <PlusCircle size={25} />
          </SubmitButton>
        </Content>
      </Container>
    </>
  );
}
