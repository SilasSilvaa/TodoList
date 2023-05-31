import { useState, useEffect } from 'react';
import { Trash, Check } from 'phosphor-react';
import { Container, Task } from './styles';
import { api } from '../../lib/api';

interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
}
[];

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    async function getTasks() {
      await api.get('/tasks').then((task) => {
        setTasks(task.data);
      });
    }

    getTasks();
  }, []);

  async function inputIsChecked(taskChecked, task) {
    if (taskChecked) {
      await api.put(`/tasks/${task.id}`, {
        id: task.id,
        description: task.description,
        completed: taskChecked,
      });

      setTasks([...tasks, task]);
    } else if (taskChecked === false) {
      await api.put(`/tasks/${task.id}`, {
        id: task.id,
        description: task.description,
        completed: false,
      });
      setTasks([...tasks, task]);
    }
  }

  return (
    <>
      <Container>
        {tasks.map((task) => (
          <Task key={task.id} ischecked={task.completed}>
            <input
              defaultChecked={task.completed}
              onChange={(e) => inputIsChecked(e.target.checked, task)}
              type="checkbox"
              id={task.id}
            />
            <label htmlFor={task.id}>
              <Check size={20} />
            </label>
            <p>{task.description}</p>
            <Trash size={25} />
          </Task>
        ))}
      </Container>
    </>
  );
}
