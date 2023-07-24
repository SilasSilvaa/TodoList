import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react';
import { toastContent, toastMessages } from '../utils/ToasMessages';
import { checkIsValidInput, checkValidId } from '../utils/ValidationInput';

export const TaskContext = createContext({} as TaskContextProps);

interface TaskContextProps {
  tasks: Task[];
  editingTask: Task;
  deleteTask: Task;
  inputValue: string;
  inputRef: RefObject<HTMLInputElement>;
  isEditing: boolean;
  toggle: boolean;
  toggleModal: (data: Task) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTask: (task: Task) => void;
  markCurrentTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  cancelUpdateTask: () => void;
}

export interface Task {
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

  const [deleteTask, setDeleteTask] = useState<Task>({
    id: '',
    description: '',
    completed: false,
    created: new Date(),
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const taskInProgress = localStorage.getItem('@tasks');

    if (taskInProgress) {
      setTasks(JSON.parse(taskInProgress));
    }
  }, []);

  //Adicionando uma nova tarefa
  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValidInput = checkIsValidInput(inputValue, tasks);

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

  //Remover tarefa
  function removeTask(task: Task) {
    const currentId = task.id;
    setToggle((state) => !state);

    if (currentId) {
      const data = tasks.filter((task) => task.id !== currentId);
      localStorage.setItem('@tasks', JSON.stringify(data));

      setTasks(data);
      toastMessages(toastContent.deletedTask);
      setToggle(false);
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

    setTasks(updateTask);
    localStorage.setItem('@tasks', JSON.stringify(updateTask));
  }

  //Editando uma tarefa
  function updateTask(data: Task) {
    setIsEditing(true);
    setInputValue(data.description);
    inputRef.current?.focus();
    setEditingTask(data);
  }

  function cancelUpdateTask() {
    setIsEditing(false);
    setInputValue('');
    inputRef.current?.blur();
  }

  function toggleModal(data: Task) {
    setToggle((state) => !state);
    setDeleteTask(data);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        editingTask,
        inputValue,
        inputRef,
        isEditing,
        toggle,
        deleteTask,
        toggleModal,
        cancelUpdateTask,
        setInputValue,
        addTask,
        removeTask,
        markCurrentTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
