import { NotePencil, PlusCircle } from 'phosphor-react';
import { TaskContext } from '../../../../contexts/TaskContexts';
import { ContentInput, SubmitButton } from './styles';
import { useContext } from 'react';

export function TaskInputRenderer() {
  const { inputValue, inputRef, isEditing, handleAddTask, setInputValue } =
    useContext(TaskContext);

  return (
    <ContentInput>
      <form onSubmit={(e) => handleAddTask(e)}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite a tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SubmitButton type="submit">
          {isEditing ? (
            <>
              Editar
              <NotePencil size={25} />{' '}
            </>
          ) : (
            <>
              Criar
              <PlusCircle size={25} />
            </>
          )}
        </SubmitButton>
      </form>
    </ContentInput>
  );
}
