'use client';

import { FormEvent, ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { InputType } from '../constants';
import { LoginFormValues } from '../types';
import { Button } from './Button';
import { Input } from './Input';
import { ValidationErrorMessage } from './ValidationErrorMessage';

const FormConfig = {
  Username: {
    NAME: `username`,
    LABEL: `Username`,
    REQUIRED: true,
    MAX_LENGTH: 16,
    PATTERN: /[A-Za-z0-9]/,
  },
  Password: {
    NAME: `password`,
    LABEL: `Password`,
    REQUIRED: true,
    MAX_LENGTH: 16,
    TYPE: InputType.PASSWORD,
  },
} as const;

const LOGIN_FAILURE_MESSAGE = `Username or password incorrect.`;

export interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => boolean | Promise<boolean>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps): ReactElement => {
  const form = useForm();

  const [errorMessage, setErrorMessage] = useState<string>();

  const preventDefault = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSubmit = form.handleSubmit(async (formValues) => {
    const result = await onSubmit({
      username: formValues[FormConfig.Username.NAME],
      password: formValues[FormConfig.Password.NAME],
    });

    setErrorMessage(result ? LOGIN_FAILURE_MESSAGE : undefined);
  });

  return (
    <StyledLoginForm>
      <FormProvider {...form}>
        {!!errorMessage && <ValidationErrorMessage text={errorMessage} />}

        <form className="form" onSubmit={preventDefault} noValidate>
          <Input
            name={FormConfig.Username.NAME}
            label={FormConfig.Username.LABEL}
            maxLength={FormConfig.Username.MAX_LENGTH}
            required={FormConfig.Username.REQUIRED}
            pattern={FormConfig.Username.PATTERN}
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

const StyledLoginForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`;
