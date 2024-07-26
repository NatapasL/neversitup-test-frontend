'use client';

import { ReactElement } from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import { TodoCard } from './TodoCard';

export interface TodoListProps {
  todoList: Todo[];
  onClickTodoCard: (todo: Todo) => void | Promise<void>;
}

export const TodoList = ({
  todoList,
  onClickTodoCard,
}: TodoListProps): ReactElement => {
  return (
    <StyledTodoCard>
      {todoList.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} onClick={onClickTodoCard} />;
      })}
    </StyledTodoCard>
  );
};

const StyledTodoCard = styled.div`
  max-height: 80vh;
  overflow: scroll;
  padding: 0;
`;
