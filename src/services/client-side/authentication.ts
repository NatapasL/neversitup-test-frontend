import { postData } from '../../helpers';
import {
  CustomResponse,
  LoginBody,
  LoginResponse,
  RawLoginResponse,
} from '../../types';

const domain = `http://localhost:3000/api`;

export const login = async (
  formValues: LoginBody
): Promise<CustomResponse<LoginResponse> | undefined> => {
  try {
    const rawResponse = await postData<RawLoginResponse>(
      domain,
      `/auth`,
      JSON.stringify(formValues)
    );

    return {
      ...rawResponse,
      data: {
        username: rawResponse.data?.username ?? ``,
        accessToken: rawResponse.data?.access_token ?? ``,
      },
    };
  } catch (error) {
    return undefined;
  }
};
