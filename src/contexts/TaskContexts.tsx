import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react';
import { toastContent, toastMessages } from '../utils/ToasMessages';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  editingTask: Task;
  inputValue: string;
  inputRef: RefObject<HTMLInputElement>;
  isEditing: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRemoveTask: (task: Task) => void;
  markCurrentTask: (task: Task) => void;
  handleUpdateTask: (task: Task) => void;
  handleCancelUpdateTask: () => void;
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

  const [editingTask, setEditingTask] = useState<Task>({
    id: '',
    description: '',
    completed: false,
    created: new Date(),
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  //Adicionando uma nova tarefa
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
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
      setTasks(updateTask);
      inputRef.current?.blur();
      setIsEditing(false);
      toastMessages(toastContent.taskEditing);
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
      toastMessages(toastContent.createdTask);
      localStorage.setItem('@tasks', JSON.stringify([...tasks, data]));
    }
  }

  // Valida se o input é valido
  function checkIsValidInput() {
    const tasksDescription = tasks.map((task) => task.description.trimEnd());
    try {
      if (inputValue === '') {
        throw new Error(toastContent.inputIsEmpty);
      }

      if (tasks.length === 100) {
        throw new Error(toastContent.limitCreateTasks);
      }

      if (tasksDescription.includes(inputValue.trimEnd())) {
        throw new Error(toastContent.taskExits);
      }

      return true;
    } catch (err: any) {
      toastMessages(err.message);
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
      toastMessages(toastContent.deletedTask);
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

    // setTimeout(() => {
    setTasks(updateTask);
    localStorage.setItem('@tasks', JSON.stringify(updateTask));
    // }, 500);
  }

  //Editando uma tarefa
  function handleUpdateTask(data: Task) {
    // console.log(isEditing);
    setIsEditing(true);
    setInputValue(data.description);
    inputRef.current?.focus();
    setEditingTask(data);
  }

  function handleCancelUpdateTask() {
    setIsEditing(false);
    setInputValue('');
    inputRef.current?.blur();
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        editingTask,
        inputValue,
        inputRef,
        isEditing,
        handleCancelUpdateTask,
        setInputValue,
        handleAddTask,
        handleRemoveTask,
        markCurrentTask,
        handleUpdateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
