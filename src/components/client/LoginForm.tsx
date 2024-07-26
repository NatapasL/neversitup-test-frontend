'use client';

import { FormEvent, ReactElement, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { InputType } from '../../constants';
import { LoginFormValues } from '../../types';
import { Button } from './Button';
import { Input } from './Input';

const FormConfig = {
  Username: {
    NAME: `username`,
    LABEL: `Username`,
    REQUIRED: true,
    MAX_LENGTH: 16,
  },
  Password: {
    NAME: `password`,
    LABEL: `Password`,
    REQUIRED: true,
    MAX_LENGTH: 16,
    TYPE: InputType.PASSWORD,
  },
} as const;

export interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => void | Promise<void>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps): ReactElement => {
  const form = useForm();

  const preventDefault = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSubmit = useCallback(
    form.handleSubmit((formValues) => {
      onSubmit({
        username: formValues[FormConfig.Username.NAME],
        password: formValues[FormConfig.Password.NAME],
      });
    }),
    [onSubmit, form.handleSubmit]
  );

  return (
    <StyledLoginForm>
      <FormProvider {...form}>
        <form onSubmit={preventDefault} noValidate>
          <Input
            name={FormConfig.Username.NAME}
            label={FormConfig.Username.LABEL}
            maxLength={FormConfig.Username.MAX_LENGTH}
            required={FormConfig.Username.REQUIRED}
          />

          <Input
            name={FormConfig.Password.NAME}
            label={FormConfig.Password.LABEL}
            maxLength={FormConfig.Password.MAX_LENGTH}
            required={FormConfig.Password.REQUIRED}
            inputType={FormConfig.Password.TYPE}
          />

          <Button onClick={handleSubmit}>Login</Button>
        </form>
      </FormProvider>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div``;
