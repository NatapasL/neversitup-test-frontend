import { redirect } from 'next/navigation';
import { ReactElement } from 'react';
import { TodoList } from '../components/server';
import { getAllTodo } from '../services/server-side/todo';
import { Todo } from '../types';

const Page = async (): Promise<ReactElement> => {
  const response = await getAllTodo();

  if (!response) {
    redirect(`/auth`);
  }

  const todoList = (response?.data?.data ?? []).map((todoResponse): Todo => {
    console.log(todoResponse);
    return {
      id: todoResponse.id,
      title: todoResponse.title,
      description: todoResponse.description,
      updatedAt: todoResponse.updatedAt,
    };
  });

  return <TodoList todoList={todoList}></TodoList>;
};

export default Page;
