'use client';

import { ReactElement, useMemo } from 'react';
import { Todo, TodoFormValues } from '../../types';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';

enum SubmitButtonText {
  CREATE = `Create`,
  EDIT = `Edit`,
}

enum ModalTitle {
  CREATE = `New todo`,
  EDIT = `Edit todo`,
}

export interface TodoFormModalProps {
  open: boolean;
  onSubmit: (formValues: TodoFormValues) => void | Promise<void>;
  onClose: () => void;
  todo?: Todo;
}

export const TodoFormModal = ({
  open,
  onSubmit,
  onClose,
  todo,
}: TodoFormModalProps): ReactElement => {
  const submitButtonText = useMemo(
    () => (todo?.id ? SubmitButtonText.EDIT : SubmitButtonText.CREATE),
    [todo?.id]
  );

  const modalTitle = useMemo(
    () => (todo?.id ? ModalTitle.EDIT : ModalTitle.CREATE),
    [todo?.id]
  );

  return (
    <Modal title={modalTitle} open={open} onClose={onClose}>
      <TodoForm
        onSubmit={onSubmit}
        onCancel={onClose}
        submitButtonText={submitButtonText}
        todo={todo}
      ></TodoForm>
    </Modal>
  );
};
