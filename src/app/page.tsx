import { redirect } from 'next/navigation';
import { ReactElement } from 'react';
import { TodoListContainer } from '../components/server';
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  getToken,
  updateTodo,
} from '../services/server';
import { Todo, TodoFormValues } from '../types';

const Page = async (): Promise<ReactElement> => {
  const token = await getToken();
  if (!token) {
    redirect(`/login`);
  }

  const response = await getAllTodo();
  if (response?.status === 401) {
    redirect(`/login`);
  }

  const handleCreateTodo = async (
    formValues: TodoFormValues
  ): Promise<void> => {
    'use server';

    const response = await createTodo(formValues);
    if (response?.status === 201) {
      return;
    }
  };

  const handelUpdateTodo = async (
    id: string,
    formValues: TodoFormValues
  ): Promise<void> => {
    'use server';

    const response = await updateTodo(id, formValues);
    if (response?.status == 200) {
      return;
    }
  };

  const handleDeleteTodo = async (id: string): Promise<void> => {
    'use server';

    const response = await deleteTodo(id);
    if (response?.status === 200) {
      return;
    }
  };

  const todoList = (response?.data?.data ?? []).map((todoResponse): Todo => {
    return {
      id: todoResponse.id,
      title: todoResponse.title,
      description: todoResponse.description,
      updatedAt: todoResponse.updatedAt,
    };
  });

  return (
    <TodoListContainer
      todoList={todoList}
      onCreateTodo={handleCreateTodo}
      onUpdateTodo={handelUpdateTodo}
      onDeleteTodo={handleDeleteTodo}
    ></TodoListContainer>
  );
};

export default Page;
