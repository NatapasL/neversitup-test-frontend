import { redirect } from 'next/navigation';
import { ReactElement } from 'react';
import { LoginContainer } from '../../containers';
import { login } from '../../services';
import { LoginFormValues } from '../../types';

const LoginPage = (): ReactElement => {
  const handleLogin = async (formValues: LoginFormValues): Promise<boolean> => {
    'use server';
    const response = await login(formValues);

    if (response?.status === 201) {
      redirect(`/`);
    }

    return false;
  };

  return <LoginContainer onSubmit={handleLogin} />;
};

export default LoginPage;
