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
        // console.log(task.data);
        setTasks(task.data);
      });
    }

    getTasks();
  }, []);

  async function inputIsChecked(task: TaskProps, e: any) {
    const value = e.target.checked;

    await api
      .put(`/tasks/${task.id}`, {
        id: task.id,
        description: task.description,
        completed: value,
      })
      .then((res) => {
        console.log(res.data);

        const response = tasks.filter((task) => task.id !== res.data.id);
        setTasks([...response, res.data]);
      });
  }

  async function handleDeleteTask(task: TaskProps) {
    // const response = await api.delete(`/tasks/${task.id}`).then((res) => {
    //   console.log(res.data);
    // });
    // console.log(response);
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
            <Trash size={25} onClick={() => handleDeleteTask(task)} />
          </Task>
        ))}
      </Container>
    </>
  );
}
