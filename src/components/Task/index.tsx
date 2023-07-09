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
import { Check } from 'phosphor-react';

// import { formatDistance } from 'date-fns';
// import { pt } from 'date-fns/locale';

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
        <p>{data.description}</p>

        {/* <span>
          {!data.completed &&
            formatDistance(new Date(data.created), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
        </span> */}
        <IconsContent ischecked={data.completed} isEditing={isEditing}>
          <CheckBox ischecked={data.completed} isEditing={isEditing}>
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
            <CloseIcon
              isEditing={isEditing}
              size={25}
              onClick={() => handleCancelUpdateTask()}
            />
          ) : (
            <NotePencilIcon
              isEditing={isEditing}
              ischecked={data.completed}
              size={25}
              onClick={() => handleUpdateTask(data)}
            />
          )}

          <TrashIcon
            isEditing={isEditing}
            size={25}
            onClick={() => handleRemoveTask(data)}
          />
        </IconsContent>
      </TaskContent>
    </>
  );
}
