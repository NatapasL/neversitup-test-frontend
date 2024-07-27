'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, ConfirmDialog, TodoFormModal } from '../components';
import { TodoList } from '../components/TodoList';
import type { Todo, TodoFormValues } from '../types';

export interface TodoListContainerProps {
  todoList: Todo[];
  onCreateTodo?: (formValues: TodoFormValues) => void | Promise<void>;
  onUpdateTodo?: (
    id: string,
    formValues: TodoFormValues
  ) => void | Promise<void>;
  onDeleteTodo: (id: string) => void | Promise<void>;
}

export const TodoListContainer = ({
  todoList,
  onCreateTodo,
  onUpdateTodo,
  onDeleteTodo,
}: TodoListContainerProps): ReactElement => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleClickCreateTodo = useCallback((): void => {
    setModalOpen(true);
  }, []);

  const handleClickTodoCard = useCallback((todo: Todo): void => {
    setSelectedTodo(todo);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setSelectedTodo(undefined);
    setModalOpen(false);
  }, []);

  const handleSubmitTodoForm = useCallback(
    async (formValues: TodoFormValues): Promise<void> => {
      if (processing) return;

      setProcessing(true);
      if (selectedTodo?.id) {
        await onUpdateTodo?.(selectedTodo.id, formValues);
      } else {
        await onCreateTodo?.(formValues);
      }
      setProcessing(false);

      setSelectedTodo(undefined);
      setModalOpen(false);
      router.refresh();
    },
    [selectedTodo?.id, onUpdateTodo, onCreateTodo, router, processing]
  );

  const handleDeleteTodo = useCallback(
    async (todo: Todo): Promise<void> => {
      if (processing) return;

      setProcessing(true);
      setConfirmDialogOpen(true);
      setSelectedTodo(todo);
    },
    [processing]
  );

  const confirmDialogDescription = useMemo(
    () => `Want delete ${selectedTodo?.title}`,
    [selectedTodo?.title]
  );

  const handelConfirmDeleteTodo = useCallback(async (): Promise<void> => {
    if (selectedTodo?.id) {
      await onDeleteTodo(selectedTodo.id);
    }
    setProcessing(false);

    setSelectedTodo(undefined);
    setConfirmDialogOpen(false);
    router.refresh();
  }, [onDeleteTodo, router, selectedTodo?.id]);

  const handleCancelDeleteTodo = useCallback((): void => {
    setProcessing(false);
    setConfirmDialogOpen(false);
  }, []);

  return (
    <>
      <StyledTodoListContainer>
        <TodoList
          todoList={todoList}
          onClickTodoCard={handleClickTodoCard}
          onClickDeleteTodoCard={handleDeleteTodo}
        ></TodoList>

        <div className="create-todo-button-container">
          <Button onClick={handleClickCreateTodo} width="100%">
            <div className="create-todo-button-inner">
              <FontAwesomeIcon size="lg" icon={faPlus} />
              Create
            </div>
          </Button>
        </div>
      </StyledTodoListContainer>

      <TodoFormModal
        open={modalOpen}
        onClose={handleCloseModal}
        todo={selectedTodo}
        onSubmit={handleSubmitTodoForm}
        disableSubmit={processing}
      ></TodoFormModal>

      <ConfirmDialog
        open={confirmDialogOpen}
        description={confirmDialogDescription}
        onSubmit={handelConfirmDeleteTodo}
        onCancel={handleCancelDeleteTodo}
      />
    </>
  );
};

const StyledTodoListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 36px);
  display: grid;
  grid-template-rows: 1fr 64px;
  overflow-x: hidden;

  .create-todo-button-container {
    padding: 4px;
    padding-top: 16px;
    box-shadow: 0 -8px 24px rgba(37, 42, 51, 0.08);
  }

  .create-todo-button-inner {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;
