'use client';

import { type ReactElement, useState } from 'react';
import { LoginForm, ValidationErrorMessage } from '../components';
import type { LoginFormValues } from '../types';

const LOGIN_FAILURE_MESSAGE = `Username or password incorrect.`;
export interface LoginContainerProps {
  onSubmit: (formValues: LoginFormValues) => boolean | Promise<boolean>;
}

export const LoginContainer = ({
  onSubmit,
}: LoginContainerProps): ReactElement => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (formValues: LoginFormValues): Promise<void> => {
    if (processing) return;

    setProcessing(true);
    const result = await onSubmit(formValues);
    setProcessing(false);

    setErrorMessage(result ? LOGIN_FAILURE_MESSAGE : undefined);
  };

  return (
    <>
      {!!errorMessage && <ValidationErrorMessage text={errorMessage} />}
      <LoginForm onSubmit={handleSubmit} disableSubmit={processing} />
    </>
  );
};
