'use client';

import { ReactElement } from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';

export interface TodoCardProps {
  todo: Todo;
  onClick?: (todo: Todo) => void | Promise<void>;
}

export const TodoCard = ({ todo, onClick }: TodoCardProps): ReactElement => {
  const handleClick = (): void => {
    onClick?.(todo);
  };

  return (
    <StyledTodoCard onClick={handleClick}>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.updatedAt}</div>
    </StyledTodoCard>
  );
};

const StyledTodoCard = styled.div``;
