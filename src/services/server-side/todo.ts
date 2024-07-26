import { getServerData } from '../../helpers/server-side-fetch';
import { CustomResponse, GetAllTodoResponse } from '../../types';
import {
  RawTodoResponse,
  TodoResponse,
} from '../../types/services/todo/TodoResponse';

export const getAllTodo = async (): Promise<
  CustomResponse<GetAllTodoResponse<TodoResponse>> | undefined
> => {
  try {
    const response = await getServerData<GetAllTodoResponse<RawTodoResponse>>(
      `https://candidate-assignment.neversitup.com`,
      `/todo`
    );

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
