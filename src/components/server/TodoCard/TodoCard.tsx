'use server';

import { ReactElement } from 'react';
import { Todo } from '../../../types';
import { StyledTodoCard } from './StyledTodoCard';

export interface TodoCardProps {
  todo: Todo;
}

export const TodoCard = ({ todo }: TodoCardProps): ReactElement => {
  return (
    <StyledTodoCard>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.updatedAt}</div>
    </StyledTodoCard>
  );
};
