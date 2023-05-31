import { useState, useEffect, ReactHTMLElement } from 'react';
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

  async function inputIsChecked(task: TaskProps, e: any) {
    const value = e.target.checked;
    console.log(value);

    await api
      .put(`/tasks/${task.id}`, {
        id: task.id,
        description: task.description,
        completed: value,
      })
      .then((res) => {
        const response = tasks.map((task) => task.id !== res.data.id);

        console.log(response);
      });
  }

  return (
    <>
      <Container>
        {tasks.map((task) => (
          <Task key={task.id} ischecked={task.completed}>
            <input
              defaultChecked={task.completed}
              onChange={(e) => inputIsChecked(task, e)}
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
