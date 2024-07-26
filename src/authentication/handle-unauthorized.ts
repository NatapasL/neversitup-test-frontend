import { redirect } from 'next/navigation';
import { clearToken } from './token';

export const handleUnauthorized = (): void => {
  clearToken();
  redirect(`/login`);
};
