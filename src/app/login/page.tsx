import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ReactElement } from 'react';
import { login } from '../../authentication';
import { LoginContainer } from '../../containers';
import { LoginFormValues } from '../../types';

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
      redirect(`/`);
      return true;
    }

    return false;
  };

  return <LoginContainer onSubmit={handleLogin} />;
};

export default LoginPage;
