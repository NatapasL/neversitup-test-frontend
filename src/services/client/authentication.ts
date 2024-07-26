import { postData } from '../../helpers';
import { CustomResponse, LoginBody, LoginResponse } from '../../types';

const domain = `http://localhost:3000/api`;

export const postLogin = async (
  formValues: LoginBody
): Promise<CustomResponse<LoginResponse> | undefined> => {
  try {
    return await postData<LoginResponse>({
      baseUrl: domain,
      path: `/auth`,
      body: JSON.stringify(formValues),
    });
  } catch (error) {
    return undefined;
  }
};
