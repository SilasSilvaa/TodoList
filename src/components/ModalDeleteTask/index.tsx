import { Trash, XCircle } from 'phosphor-react';
import { Button } from '../Button';
import { ButtonContent, ModalContainer, ModalContent } from './styled';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

export function ModalDeleteTask() {
  const { deleteTask, removeTask, cancelDelteTask } = useContext(TaskContext);

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <p>Deseja excluir a tarefa?</p>
          <ButtonContent>
            <Button colorButton="delete" onClick={() => removeTask(deleteTask)}>
              Excluir
              <Trash />
            </Button>

            <Button colorButton="default" onClick={cancelDelteTask}>
              Cancalar
              <XCircle />
            </Button>
          </ButtonContent>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
