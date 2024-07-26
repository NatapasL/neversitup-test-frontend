import { setCookie } from 'cookies-next';
import { ReactElement } from 'react';
import { LoginForm } from '../components/LoginForm';
import { login } from '../services/client';
import { LoginFormValues } from '../types';

const AuthPage = (): ReactElement => {
  const handleSubmit = async (formValues: LoginFormValues): Promise<void> => {
    const response = await login(formValues);
    console.log(response);
    console.log(response?.data);

    if (response?.status === 201) {
      setCookie(`token`, response.data?.accessToken ?? ``, {
        httpOnly: true,
        secure: true,
        path: `/`,
      });
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default AuthPage;
