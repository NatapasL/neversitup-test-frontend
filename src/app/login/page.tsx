import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { ReactElement } from 'react';
import { login } from '../../authentication';
import { LoginContainer } from '../../containers';
import type { LoginFormValues } from '../../types';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Login',
  };
};

const LoginPage = (): ReactElement => {
  const handleLogin = async (formValues: LoginFormValues): Promise<boolean> => {
    'use server';
    const loginResult = await login(formValues);

    if (loginResult) {
      redirect(`/todo`);
      return true;
    }

    return false;
  };

  return <LoginContainer onSubmit={handleLogin} />;
};

export default LoginPage;
