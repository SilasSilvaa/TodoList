import { TextHeader } from './styles';

import { ClipboardText } from 'phosphor-react';

export function Header() {
  return (
    <>
      <TextHeader>
        <ClipboardText size={35} />
        <h1>TodoList</h1>
      </TextHeader>
    </>
  );
}
