import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

import { TaskContent } from './styles';
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
    markCurrentTask,
    handleRemoveTask,
    handleUpdateTask,
    handleCancelUpdateTask,
  } = useContext(TaskContext);

  return (
    <>
      <TaskContent
        key={data.id}
        ischecked={data.completed}
        isEditing={isEditing && editingTask?.id === data.id}
      >
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
        <p>{data.description}</p>

        <span>
          {!data.completed &&
            formatDistance(new Date(data.created), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
        </span>

        {isEditing && editingTask?.id === data.id ? (
          <X size={25} onClick={() => handleCancelUpdateTask()} />
        ) : (
          <NotePencil size={25} onClick={() => handleUpdateTask(data)} />
        )}

        <Trash size={25} onClick={() => handleRemoveTask(data)} />
      </TaskContent>
    </>
  );
}
