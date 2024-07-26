import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { Time } from '../../constants';
import { postLogin } from '../../services/route-handler';
import { LoginResponse } from '../../types';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method !== 'POST') {
    response.status(404);
    return;
  }

  const res = await postLogin(JSON.stringify(request.body));

  if (res?.status === 201) {
    const serializedCookie = serialize('token', res.data?.access_token ?? ``, {
      httpOnly: true,
      secure: true,
      maxAge: 1 * Time.DAY,
      path: '/',
    });

    response.setHeader('Set-Cookie', serializedCookie);
  }

  const responseData: LoginResponse = { success: true };
  response.status(res.status);
  response.send(responseData);
}
