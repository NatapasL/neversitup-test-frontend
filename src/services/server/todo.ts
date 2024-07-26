import { getData } from '../../helpers';
import { CustomResponse, GetAllTodoResponse } from '../../types';
import {
  RawTodoResponse,
  TodoResponse,
} from '../../types/services/todo/TodoResponse';

const getToken = async (): Promise<string | undefined> => {
  const { cookies } = await import(`next/headers`);
  return cookies().get(`token`)?.value;
};

export const getAllTodo = async (): Promise<
  CustomResponse<GetAllTodoResponse<TodoResponse>> | undefined
> => {
  try {
    const token = await getToken();
    const response = await getData<GetAllTodoResponse<RawTodoResponse>>({
      baseUrl: `https://candidate-assignment.neversitup.com`,
      path: `/todo`,
      token: token ?? ``,
    });

    return {
      ...response,
      data: {
        isSuccess: response.data?.isSuccess ?? false,
        data:
          response.data?.data?.map((rawTodo) => ({
            ...rawTodo,
            createdAt: rawTodo.created_at,
            createdBy: rawTodo.created_by,
            updatedAt: rawTodo.updated_at,
          })) ?? [],
      },
    };
  } catch (error) {
    return undefined;
  }
};
