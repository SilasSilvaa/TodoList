import React, { useEffect, useState } from 'react';
import { Trash, Check, PlusCircle } from 'phosphor-react';
import { Container, Content, ContentInput, SubmitButton, Task } from './styles';

interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
  created: string;
}
[];

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const response = localStorage.getItem('@tasks');

    if (response) {
      setTasks(JSON.parse(response));
    }
  }, []);

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newId = String(Math.floor(Math.random() * 1000) + 1);

    if (inputValue === '') {
      alert('Escreva uma tarefa');
      return;
    }

    const data: TaskProps = {
      id: newId,
      description: inputValue,
      completed: false,
      created: '09/06/2023',
    };

    setTasks((state) => [...state, data]);
    setInputValue('');
    localStorage.setItem('@tasks', JSON.stringify([...tasks, data]));
  }

  return (
    <>
      <Container>
        <Content>
          {tasks.map((task) => (
            <Task key={task.id} ischecked={task.completed}>
              <input
                defaultChecked={task.completed}
                type="checkbox"
                id={task.id}
              />
              <label htmlFor={task.id}>
                <Check size={20} />
              </label>
              <p>{task.description}</p>
              <span>{task.created}</span>
              <Trash size={25} />
            </Task>
          ))}
        </Content>
        <ContentInput>
          <form onSubmit={(e) => handleAddTask(e)}>
            <input
              type="text"
              placeholder="Digite a tarefa..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SubmitButton type="submit">
              Criar
              <PlusCircle size={25} />
            </SubmitButton>
          </form>
        </ContentInput>
      </Container>
    </>
  );
}
