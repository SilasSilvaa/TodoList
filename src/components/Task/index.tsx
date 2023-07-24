import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

import {
  CheckBox,
  CloseIcon,
  IconsContent,
  NotePencilIcon,
  TaskContent,
  TrashIcon,
} from './styles';

import { Check, NotePencil, Trash, X } from 'phosphor-react';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

interface TaskProps {
  data: {
    id: string;
    description: string;
    completed: boolean;
    created: Date;
  };
}

export function Task({ data }: TaskProps) {
  const {
    editingTask,
    isEditing,
    toggleModal,
    markCurrentTask,
    updateTask,
    cancelUpdateTask,
  } = useContext(TaskContext);

  return (
    <>
      <TaskContent
        key={data.id}
        checked={data.completed}
        editing={isEditing && editingTask?.id === data.id}
      >
        <p>{data.description}</p>

        {data.completed ? (
          <span>Tarefa finalizada</span>
        ) : (
          <span>
            {formatDistance(new Date(data.created), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </span>
        )}
        <IconsContent>
          <CheckBox checked={data.completed} editing={isEditing}>
            <input
              defaultChecked={data.completed}
              type="checkbox"
              id={data.id}
              disabled={isEditing}
              onChange={() => markCurrentTask(data)}
            />
            <label htmlFor={data.id}>
              <Check size={20} />
            </label>
          </CheckBox>

          {isEditing && editingTask?.id === data.id ? (
            <CloseIcon editing={isEditing} onClick={cancelUpdateTask}>
              <X size={25} />
            </CloseIcon>
          ) : (
            <NotePencilIcon
              editing={isEditing}
              checked={data.completed}
              onClick={() => updateTask(data)}
            >
              <NotePencil size={25} />
            </NotePencilIcon>
          )}

          <TrashIcon editing={isEditing} onClick={() => toggleModal(data)}>
            <Trash size={25} />
          </TrashIcon>
        </IconsContent>
      </TaskContent>
    </>
  );
}
