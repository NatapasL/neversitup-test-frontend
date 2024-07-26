import { API_BASE_URL } from '../../constants/api-url';
import { postData } from '../../helpers';
import { CustomResponse, RawLoginResponse } from '../../types';

export const postLogin = async (
  body: string
): Promise<CustomResponse<RawLoginResponse>> => {
  return postData<RawLoginResponse>({
    baseUrl: API_BASE_URL,
    path: `/auth/login`,
    body: body,
  });
};
