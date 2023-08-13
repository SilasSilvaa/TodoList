import { NotePencil, PlusCircle } from 'phosphor-react';
import { TaskContext } from '../../../../contexts/TaskContexts';
import { ContentInput } from './styles';
import { useContext } from 'react';
import { Button } from '../../../../components/Button';

export function TaskInputRenderer() {
  const { inputValue, inputRef, isEditing, addTask, setInputValue } =
    useContext(TaskContext);

  return (
    <ContentInput>
      <form onSubmit={(e) => addTask(e)}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite a tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isEditing ? (
          <Button colorButton="default">
            Editar
            <NotePencil />
          </Button>
        ) : (
          <Button colorButton="default">
            Criar
            <PlusCircle />
          </Button>
        )}
      </form>
    </ContentInput>
  );
}
