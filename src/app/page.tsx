import { redirect } from 'next/navigation';
import { ReactElement } from 'react';
import { TodoListContainer } from '../containers';
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  getToken,
  updateTodo,
} from '../services';
import { Todo, TodoFormValues } from '../types';

const IndexPage = async (): Promise<ReactElement> => {
  const token = getToken();
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

    await createTodo(formValues);
  };

  const handelUpdateTodo = async (
    id: string,
    formValues: TodoFormValues
  ): Promise<void> => {
    'use server';

    await updateTodo(id, formValues);
  };

  const handleDeleteTodo = async (id: string): Promise<void> => {
    'use server';

    await deleteTodo(id);
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

export default IndexPage;
