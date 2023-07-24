import { Trash, XCircle } from 'phosphor-react';
import { Button } from '../Button';
import { ButtonContent, ModalContainer, ModalContent } from './styled';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

export function ModalDeleteTask() {
  const { deleteTask, removeTask, toggleModal } = useContext(TaskContext);

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <p>Deseja excluir a tarefa?</p>
          <ButtonContent>
            <Button
              content="Excluir"
              colorButton="delete"
              svg={<Trash />}
              onAction={() => removeTask(deleteTask)}
            />

            <Button
              content="Cancelar"
              svg={<XCircle />}
              colorButton="default"
              onAction={toggleModal}
            />
          </ButtonContent>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
