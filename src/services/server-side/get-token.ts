import { cookies } from 'next/headers';

export const getToken = async (): Promise<string | undefined> => {
  return cookies().get(`token`)?.value;
};
