'use client';

import { ReactElement } from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import { TodoCard } from './TodoCard';

export interface TodoListProps {
  todoList: Todo[];
  onClickTodoCard: (todo: Todo) => void | Promise<void>;
  onClickDeleteTodoCard: (todo: Todo) => void | Promise<void>;
}

export const TodoList = ({
  todoList,
  onClickTodoCard,
  onClickDeleteTodoCard,
}: TodoListProps): ReactElement => {
  return (
    <StyledTodoCard>
      {todoList.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            onClick={onClickTodoCard}
            onClickDelete={onClickDeleteTodoCard}
          />
        );
      })}
    </StyledTodoCard>
  );
};

const StyledTodoCard = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 0 16px;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
