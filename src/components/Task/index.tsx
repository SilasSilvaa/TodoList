import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

import { TaskContent } from './styles';
import { Check, NotePencil, Trash, X } from 'phosphor-react';

import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

export function Task() {
  const {
    tasks,
    editingTask,
    isEditing,
    markCurrentTask,
    handleRemoveTask,
    handleUpdateTask,
    handleCancelUpdateTask,
  } = useContext(TaskContext);

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskContent
            key={task.id}
            ischecked={task.completed}
            isEditing={isEditing && editingTask?.id === task.id}
          >
            <input
              defaultChecked={task.completed}
              type="checkbox"
              id={task.id}
              disabled={isEditing}
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

            {isEditing && editingTask?.id === task.id ? (
              <X size={25} onClick={() => handleCancelUpdateTask()} />
            ) : (
              <NotePencil size={25} onClick={() => handleUpdateTask(task)} />
            )}

            <Trash size={25} onClick={() => handleRemoveTask(task)} />
          </TaskContent>
        ))
      ) : (
        <span> Sem tarefas em andamneto...</span>
      )}
    </>
  );
}
