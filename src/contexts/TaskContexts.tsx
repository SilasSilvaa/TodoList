import { ReactNode, createContext, useState, useEffect } from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  inputValue: string;
  changeValueInput: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRemoveTask: (task: Task) => void;
  markCurrentTask: (task: Task) => void;
  handleEditTask: (task: Task) => void;
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

  const [changeValueInput, setChangeValueInput] = useState<boolean>(false);

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  //Adicionando uma nova tarefa
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newId = String(Math.floor(Math.random() * 10000) + 1);

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

  //Atualizando Status da task para finalizada ou em andamento
  function markCurrentTask(currentTask: Task) {
    const taskIndex = tasks.findIndex((task) => task.id === currentTask.id);

    const updateTask: Task[] = [...tasks];
    updateTask[taskIndex] = {
      ...currentTask,
      completed: !currentTask.completed,
    };
    setChangeValueInput((state) => !state);

    setTimeout(() => {
      setTasks(updateTask);
      localStorage.setItem('@tasks', JSON.stringify(updateTask));
    }, 500);
  }

  function handleEditTask({}: Task) {
    setChangeValueInput(false);

    setInputValue(task.description);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        changeValueInput,
        setInputValue,
        handleAddTask,
        handleRemoveTask,
        markCurrentTask,
        handleEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
