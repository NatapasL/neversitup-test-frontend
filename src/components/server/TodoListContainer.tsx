'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { ReactElement, useCallback, useState } from 'react';
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
    <div>
      <TodoList
        todoList={todoList}
        onClickTodoCard={handleClickTodoCard}
      ></TodoList>

      <Button onClick={handleClickCreateTodo}>
        <FontAwesomeIcon size="sm" icon={faPlus} />
        Create
      </Button>

      <TodoFormModal
        open={modalOpen}
        onClose={handleCloseModal}
        todo={editingTodo}
        onSubmit={handleSubmitTodoForm}
      ></TodoFormModal>
    </div>
  );
};
