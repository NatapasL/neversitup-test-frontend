import { clearToken, setToken } from '../authentication/token';
import { postData } from '../helpers';
import {
  CustomResponse,
  LoginBody,
  LoginResponse,
  RawLoginResponse,
} from '../types';

export const login = async (
  formValues: LoginBody
): Promise<CustomResponse<LoginResponse> | undefined> => {
  try {
    const response = await postData<RawLoginResponse>({
      path: `/auth/login`,
      body: JSON.stringify(formValues),
    });

    if (response.data?.access_token) {
      setToken(response.data.access_token);
    } else {
      clearToken();
    }

    return {
      ...response,
      data: {
        username: response.data?.username ?? ``,
        accessToken: response.data?.access_token ?? ``,
      },
    };
  } catch (error) {
    clearToken();
    return undefined;
  }
};
