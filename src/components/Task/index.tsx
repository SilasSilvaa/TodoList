import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

import { TaskContent } from './styles';
import { Check, Trash, NotePencil, X } from 'phosphor-react';

import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

export function Task() {
  const {
    tasks,
    isEditing,
    setIsEditing,
    markCurrentTask,
    handleRemoveTask,
    handleEditTask,
  } = useContext(TaskContext);

  return (
    <>
      {tasks.map((task) => (
        <TaskContent key={task.id} ischecked={task.completed}>
          <input
            defaultChecked={task.completed}
            type="checkbox"
            id={task.id}
            onChange={() => markCurrentTask(task)}
          />
          <label htmlFor={task.id}>
            <Check size={20} />
          </label>
          <p>{task.description}</p>

          <span>
            {!task.completed &&
              formatDistance(new Date(task.created), new Date(), {
                addSuffix: true,
                locale: pt,
              })}
          </span>

          {isEditing ? (
            <NotePencil size={25} onClick={() => handleEditTask(task)} />
          ) : (
            <X size={25} onClick={() => handleEditTask(task)} />
          )}

          <Trash size={25} onClick={() => setIsEditing(false)} />
        </TaskContent>
      ))}
    </>
  );
}
