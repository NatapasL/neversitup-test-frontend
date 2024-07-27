import { FormEvent, ReactElement, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ButtonType } from '../constants';
import { Todo, TodoFormValues } from '../types';
import { Button } from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';

const FormConfig = {
  Title: {
    LABEL: `Title`,
    NAME: `title`,
    MAX_LENGTH: 16,
    REQUIRED: true,
  },
  Description: {
    LABEL: `Description`,
    NAME: `description`,
    MAX_LENGTH: 100,
    REQUIRED: true,
  },
} as const;

export interface TodoFormProps {
  todo?: Todo;
  submitButtonText: string;
  onSubmit: (formValues: TodoFormValues) => void | Promise<void>;
  onCancel: () => void | Promise<void>;
}

export const TodoForm = ({
  todo,
  onSubmit,
  submitButtonText,
  onCancel,
}: TodoFormProps): ReactElement => {
  const form = useForm();

  const handleCancel = useCallback((): void => {
    form.reset();
    onCancel();
  }, [form, onCancel]);

  const preventDefault = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSubmit = form.handleSubmit((formValues) => {
    onSubmit({
      title: formValues[FormConfig.Title.NAME],
      description: formValues[FormConfig.Description.NAME],
    });
  });

  return (
    <StyledTodoForm>
      <FormProvider {...form}>
        <form className="form" onSubmit={preventDefault} noValidate>
          <Input
            label={FormConfig.Title.LABEL}
            name={FormConfig.Title.NAME}
            maxLength={FormConfig.Title.MAX_LENGTH}
            required={FormConfig.Title.REQUIRED}
            value={todo?.title ?? ``}
          />
          <Textarea
            label={FormConfig.Description.LABEL}
            name={FormConfig.Description.NAME}
            maxLength={FormConfig.Description.MAX_LENGTH}
            required={FormConfig.Description.REQUIRED}
            value={todo?.description ?? ``}
          />

          <div className="button-container">
            <Button
              type={ButtonType.SECONDARY}
              onClick={handleCancel}
              width="84px"
            >
              Cancel
            </Button>

            <Button onClick={handleSubmit} width="84px">
              {submitButtonText}
            </Button>
          </div>
        </form>
      </FormProvider>
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
  }

  .button-container {
    display: flex;
    column-gap: 8px;
    justify-content: flex-end;
  }
`;
