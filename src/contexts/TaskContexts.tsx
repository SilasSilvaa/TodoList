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
  const [isEditing, setIsEditing] = useState<Task | null>();
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
    const isValidInput = checkInput();

    if (isEditing && isValidInput) {
      const currentIndex = tasks.findIndex((task) => task.id === isEditing.id);

      const updateTask: Task[] = [...tasks];
      updateTask[currentIndex] = {
        ...isEditing,
        description: inputValue,
      };

      setTasks(updateTask);
      setInputValue('');
      setIsEditing(null);
      return;
    }

    if (isValidInput) {
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
    }
  }

  function checkInput() {
    const tasksDescription = tasks.map((task) => task.description.trimEnd());

    try {
      if (inputValue === '') {
        throw new Error('Preencha uma tarefa!');
      }

      if (tasks.length === 100) {
        throw new Error('Limite de tarefas atingido!');
      }

      if (tasksDescription.includes(inputValue.trimEnd())) {
        throw new Error('Tarefa já cadastrada');
      }

      return true;
    } catch (err) {
      console.log((err as Error).message);
      return false;
    }
  }

  function checkValidId(tasks: Task[]) {
    const newId = String(Math.floor(Math.random() * 1000) + 1);
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

    setTimeout(() => {
      setTasks(updateTask);
      localStorage.setItem('@tasks', JSON.stringify(updateTask));
    }, 500);
  }

  function handleEditTask(data: Task) {
    setIsEditing(data);
    inputRef.current?.focus();
    setInputValue(data.description);
  }

  function editing(data: Task) {
    // setIsEditing(true);

    const taskIndex = tasks.findIndex((task) => task.description === data.id);

    const updateTask: Task[] = [...tasks];
    updateTask[taskIndex] = {
      ...data,
      description: inputValue,
    };

    // setIsEditing(false);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        inputRef,
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
