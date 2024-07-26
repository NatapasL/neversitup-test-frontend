import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';
import { LoginForm } from '../components/client/LoginForm';
import { postLogin } from '../services/client';
import { LoginFormValues } from '../types';

const AuthPage = (): ReactElement => {
  const router = useRouter();

  const handleSubmit = async (formValues: LoginFormValues): Promise<void> => {
    const response = await postLogin(formValues);

    if (response?.status === 201) {
      router.push(`/`);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default AuthPage;
