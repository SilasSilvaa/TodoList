import { PlusCircle } from 'phosphor-react';
import { TaskContext } from '../../../../contexts/TaskContexts';
import { ContentInput, SubmitButton } from './styles';
import { useContext } from 'react';

export function Search() {
  const { inputValue, handleAddTask, setInputValue } = useContext(TaskContext);

  return (
    <ContentInput>
      <form onSubmit={(e) => handleAddTask(e)}>
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SubmitButton type="submit">
          Criar
          <PlusCircle size={25} />
        </SubmitButton>
      </form>
    </ContentInput>
  );
}
