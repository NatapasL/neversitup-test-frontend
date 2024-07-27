import { postLogin } from '../services';
import { LoginBody } from '../types';
import { clearToken, setToken } from './token';

export const login = async (formValues: LoginBody): Promise<boolean> => {
  const response = await postLogin(formValues);

  if (response?.status === 201 && response?.data?.accessToken) {
    setToken(response.data.accessToken);
    return true;
  }

  clearToken();
  return false;
};
