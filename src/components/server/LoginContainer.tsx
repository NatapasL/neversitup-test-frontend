'use client';

import { ReactElement } from 'react';
import { LoginFormValues } from '../../types';
import { LoginForm } from '../client';

export interface LoginContainerProps {
  onSubmit: (formValues: LoginFormValues) => void | Promise<void>;
}

export const LoginContainer = ({
  onSubmit,
}: LoginContainerProps): ReactElement => {
  return <LoginForm onSubmit={onSubmit} />;
};
