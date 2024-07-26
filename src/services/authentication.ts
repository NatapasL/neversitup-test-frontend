import { API_BASE_URL } from '../constants/api-url';
import { postData } from '../helpers';
import { CustomResponse, LoginResponse, RawLoginResponse } from '../types';

export const login = async (formValues: {
  username: string;
  password: string;
}): Promise<CustomResponse<LoginResponse> | undefined> => {
  try {
    const rawResponse = await postData<RawLoginResponse>(
      API_BASE_URL,
      `/todo`,
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
