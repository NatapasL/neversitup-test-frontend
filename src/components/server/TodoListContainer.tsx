'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { ReactElement, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Todo, TodoFormValues } from '../../types';
import { TodoFormModal } from '../client';
import { Button } from '../client/Button';
import { TodoList } from './TodoList';

export interface TodoListContainerProps {
  todoList: Todo[];
  onCreateTodo?: (formValues: TodoFormValues) => void | Promise<void>;
  onUpdateTodo?: (
    id: string,
    formValues: TodoFormValues
  ) => void | Promise<void>;
}

export const TodoListContainer = ({
  todoList,
  onCreateTodo,
  onUpdateTodo,
}: TodoListContainerProps): ReactElement => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>();

  const router = useRouter();

  const handleClickCreateTodo = useCallback((): void => {
    setModalOpen(true);
  }, []);

  const handleClickTodoCard = (todo: Todo): void => {
    setEditingTodo(todo);
    setModalOpen(true);
  };

  const handleCloseModal = useCallback((): void => {
    setEditingTodo(undefined);
    setModalOpen(false);
  }, []);

  const handleSubmitTodoForm = useCallback(
    async (formValues: TodoFormValues): Promise<void> => {
      if (editingTodo?.id) {
        await onUpdateTodo?.(editingTodo.id, formValues);
      } else {
        await onCreateTodo?.(formValues);
      }

      setEditingTodo(undefined);
      setModalOpen(false);
      router.refresh();
    },
    [editingTodo?.id, onUpdateTodo, onCreateTodo, router]
  );

  return (
    <>
      <StyledTodoListContainer>
        <TodoList
          todoList={todoList}
          onClickTodoCard={handleClickTodoCard}
        ></TodoList>

        <div className="create-todo-button-container">
          <Button onClick={handleClickCreateTodo} width="100%">
            <FontAwesomeIcon size="lg" icon={faPlus} />
            Create
          </Button>
        </div>
      </StyledTodoListContainer>

      <TodoFormModal
        open={modalOpen}
        onClose={handleCloseModal}
        todo={editingTodo}
        onSubmit={handleSubmitTodoForm}
      ></TodoFormModal>
    </>
  );
};

const StyledTodoListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display: grid;
  grid-template-rows: 1fr 64px;
  /* row-gap: 32px; */
  overflow-x: hidden;

  .create-todo-button-container {
    padding-top: 16px;
    box-shadow: 2px 47px 139px 87px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 47px 32px 87px rgba(200, 200, 200, 0.75);
  }
`;
