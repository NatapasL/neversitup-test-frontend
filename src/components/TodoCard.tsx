'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import { SECONDARY } from '../styles/colors';
import { Body2, Small2, Title3 } from '../styles/text';
import { Todo } from '../types';

export interface TodoCardProps {
  todo: Todo;
  onClick?: (todo: Todo) => void | Promise<void>;
  onClickDelete?: (todo: Todo) => void | Promise<void>;
}

export const TodoCard = ({
  todo,
  onClick,
  onClickDelete,
}: TodoCardProps): ReactElement => {
  const handleClick = (): void => {
    onClick?.(todo);
  };

  const handleClickDelete: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    e.stopPropagation();

    onClickDelete?.(todo);
  };

  return (
    <StyledTodoCard onClick={handleClick}>
      <div className="card-header">
        <Title3>{todo.title}</Title3>
        <button className="delete-todo-button" onClick={handleClickDelete}>
          <FontAwesomeIcon size="sm" icon={faX} />
        </button>
      </div>
      <Body2 className="description-container">{todo.description}</Body2>
      <Small2 className="date-container">{todo.updatedAt}</Small2>
    </StyledTodoCard>
  );
};

const StyledTodoCard = styled.div`
  width: 500px;
  box-shadow: 0 8px 24px rgba(37, 42, 51, 0.08);
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  .description-container {
    max-height: 50px;
    word-break: break-all;
    white-space: break-spaces;
    overflow: hidden;
  }

  .date-container {
    color: ${SECONDARY};
    text-align: end;
  }

  .delete-todo-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
