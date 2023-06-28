import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  inputValue: string;
  inputRef: RefObject<HTMLInputElement>;
  // changeValueInput: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddNewTask: (e: React.FormEvent<HTMLFormElement>) => void;
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
  // const [changeValueInput, setChangeValueInput] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  //Adicionando uma nova tarefa
  function handleAddNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (tasks.length === 100) {
      alert('Limite de 100 tarefas atingido, por favor exclua uma!');
      return;
    } else {
      CheckValidTask(tasks);
    }

    if (inputValue !== '') {
      const id = checkValidId(tasks);

      const data: Task = {
        id: id,
        description: inputValue,
        completed: false,
        created: new Date(),
      };

      setTasks((state) => [...state, data]);
      setInputValue('');
      localStorage.setItem('@tasks', JSON.stringify([...tasks, data]));
    } else {
      alert('Escreva uma tarefa');
      return;
    }
  }

  function CheckValidTask(tasks: Task[]) {
    const tasksDescription = tasks.map((task) => task.description.trimEnd());

    if (tasksDescription.includes(inputValue.trimEnd())) {
      return alert('Tarefa já cadastrada!');
    }

    return;
  }

  function checkValidId(tasks: Task[]) {
    const newId = String(Math.floor(Math.random() * 100) + 1);
    const currentIds = tasks.map((task) => task.id);

    if (currentIds.includes(newId)) {
      return checkValidId(tasks);
    } else {
      return newId;
    }
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
    // setChangeValueInput((state) => !state);

    setTimeout(() => {
      setTasks(updateTask);
      localStorage.setItem('@tasks', JSON.stringify(updateTask));
    }, 500);
  }

  function handleEditTask(data: Task) {
    // setChangeValueInput(false);
    inputRef.current?.focus();
    setInputValue(data.description);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        inputRef,
        // changeValueInput,
        setInputValue,
        handleAddNewTask,
        handleRemoveTask,
        markCurrentTask,
        handleEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
