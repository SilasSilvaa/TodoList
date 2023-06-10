import { ReactNode, createContext, useState, useEffect } from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRemoveTask: (task: Task) => void;
  markCurrentTaskAsFinished: (
    task: Task,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface Task {
  id: string;
  description: string;
  completed: boolean;
  created: Date;
}

interface ChildrenProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  //Adicionando uma nova tarefa
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newId = String(Math.floor(Math.random() * 1000) + 1);

    if (inputValue === '') {
      alert('Escreva uma tarefa');
      return;
    }

    const data: Task = {
      id: newId,
      description: inputValue,
      completed: false,
      created: new Date(),
    };

    setTasks((state) => [...state, data]);
    setInputValue('');
    localStorage.setItem('@tasks', JSON.stringify([...tasks, data]));
  }

  //Remover tarefa
  function handleRemoveTask(task: Task) {
    const currentId = task.id;

    if (currentId) {
      const data = tasks.filter((task) => task.id !== currentId);
      localStorage.setItem('@tasks', JSON.stringify(data));
      setTasks(data);
    }
  }

  //Atualizando Status da task para finalizada
  function markCurrentTaskAsFinished(
    currentTask: Task,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const inputChecked = e.target.checked;

    const data = tasks.map((task) => {
      if (task.id === currentTask.id) {
        return {
          id: task.id,
          description: task.description,
          completed: inputChecked,
          created: task.created,
        };
      } else {
        return task;
      }
    });
    setTasks(data);
    localStorage.setItem('@tasks', JSON.stringify(data));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        setInputValue,
        handleAddTask,
        handleRemoveTask,
        markCurrentTaskAsFinished,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
