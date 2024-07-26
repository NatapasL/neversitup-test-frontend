import { cookies } from 'next/headers';
import { Time } from '../../constants';

const TOKEN_KEY = `token`;

export const getToken = (): string | undefined => {
  return cookies().get(TOKEN_KEY)?.value;
};

export const setToken = (token: string): void => {
  cookies().set({
    name: TOKEN_KEY,
    value: token,
    httpOnly: true,
    secure: true,
    maxAge: 1 * Time.DAY,
    path: '/',
  });
};

export const clearToken = (): void => {
  cookies().delete(TOKEN_KEY);
};
