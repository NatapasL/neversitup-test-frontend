'use client';

import { type ReactElement, useCallback, useState } from 'react';
import { LoginForm, ValidationErrorMessage } from '../components';
import { useSingleProcess } from '../hooks/useSingleProcess';
import type { LoginFormValues } from '../types';

const LOGIN_FAILURE_MESSAGE = `Username or password incorrect.`;
export interface LoginContainerProps {
  onSubmit: (formValues: LoginFormValues) => boolean | Promise<boolean>;
}

export const LoginContainer = ({
  onSubmit,
}: LoginContainerProps): ReactElement => {
  const { process, isProcessing } = useSingleProcess();

  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = useCallback(
    (formValues: LoginFormValues): Promise<void> =>
      process(async () => {
        const result = await onSubmit(formValues);

        setErrorMessage(result ? LOGIN_FAILURE_MESSAGE : undefined);
      }),
    [onSubmit, process]
  );

  return (
    <>
      {!!errorMessage && <ValidationErrorMessage text={errorMessage} />}
      <LoginForm onSubmit={handleSubmit} disableSubmit={isProcessing} />
    </>
  );
};
