import { Link } from 'react-router-dom';
import { TextHeader } from './styles';

import { ClipboardText } from 'phosphor-react';

export function Header() {
  return (
    <>
      <TextHeader>
        <ClipboardText size={35} />
        <Link to={'/'}>TodoList</Link>
      </TextHeader>
    </>
  );
}
