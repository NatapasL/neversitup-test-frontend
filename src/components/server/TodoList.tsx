'use server';

import { ReactElement } from 'react';
import { Todo } from '../../types';
import { TodoCard } from './TodoCard';

export interface TodoListProps {
  todoList: Todo[];
}

export const TodoList = ({ todoList }: TodoListProps): ReactElement => {
  return (
    <div>
      {todoList.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
