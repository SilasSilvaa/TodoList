import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContexts';

import { TaskContent } from './styles';
import { Check, Trash } from 'phosphor-react';

import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

interface TaskDataProps {
  data: {
    id: string;
    description: string;
    completed: boolean;
    created: Date;
  };
}

export function Task({ data }: TaskDataProps) {
  const { markCurrentTaskAsFinished, handleRemoveTask } =
    useContext(TaskContext);

  return (
    <>
      <TaskContent key={data.id} ischecked={data.completed}>
        <input
          defaultChecked={data.completed}
          type="checkbox"
          id={data.id}
          onChange={(e) => markCurrentTaskAsFinished(data, e)}
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

        <Trash size={25} onClick={() => handleRemoveTask(data)} />
      </TaskContent>
    </>
  );
}
