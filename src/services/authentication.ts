import { postData } from '../helpers';
import type {
  CustomResponse,
  LoginBody,
  LoginResponse,
  RawLoginResponse,
} from '../types';

export const postLogin = async (
  formValues: LoginBody
): Promise<CustomResponse<LoginResponse> | undefined> => {
  try {
    const response = await postData<RawLoginResponse>({
      path: `/auth/login`,
      body: JSON.stringify(formValues),
    });

    return {
      ...response,
      data: {
        username: response.data?.username ?? ``,
        accessToken: response.data?.access_token ?? ``,
      },
    };
  } catch (error) {
    return undefined;
  }
};
