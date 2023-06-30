import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react';

import { toast } from 'react-toastify';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  inputValue: string;
  inputRef: RefObject<HTMLInputElement>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
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
  const inputRef = useRef<HTMLInputElement>(null);

  const [editingTask, seteditingTask] = useState<Task>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  //Adicionando uma nova tarefa
  function handleAddNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValidInput = checkIsValidInput();

    if (isEditing && isValidInput) {
      const currentIndex = tasks.findIndex(
        (task) => task.id === editingTask.id
      );

      const updateTask: Task[] = [...tasks];
      updateTask[currentIndex] = {
        ...editingTask,
        description: inputValue,
      };

      setInputValue('');
      // setIsEditing();
      setTasks(updateTask);
      localStorage.setItem('@tasks', JSON.stringify(updateTask));
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

  // Valida se o input é valido
  function checkIsValidInput() {
    const tasksDescription = tasks.map((task) => task.description.trimEnd());
    const notify = (msg: string) => {
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    try {
      if (inputValue === '') {
        throw new Error('Preencha o campo!');
      }

      if (tasks.length === 100) {
        throw new Error('Limite de tarefas atingido!');
      }

      if (tasksDescription.includes(inputValue.trimEnd())) {
        throw new Error('Tarefa já cadastrada');
      }

      return true;
    } catch (err) {
      notify((err as Error).message);
      return false;
    }
  }

  // Valida se o id é valido
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

  //Editando uma tarefa
  function handleEditTask(data: Task) {
    setIsEditing((state) => !state);
    seteditingTask(data);
    inputRef.current?.focus();
    setInputValue(data.description);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        inputRef,
        isEditing,
        setIsEditing,
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
