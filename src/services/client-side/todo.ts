import { deleteData, patchData, postData } from '../../helpers/fetch';
import {
  CreateTodoResponse,
  CustomResponse,
  DeleteTodoResponse,
  TodoBody,
  UpdateTodoResponse,
} from '../../types';

const domain = `http://localhost:3000/api`;

export const createTodo = async (
  body: TodoBody
): Promise<CustomResponse<CreateTodoResponse> | undefined> => {
  try {
    return await postData({
      baseUrl: domain,
      path: `/todo`,
      body: JSON.stringify(body),
    });
  } catch (error) {
    return undefined;
  }
};

export const updateTodo = async <
  Keys extends keyof Partial<TodoBody>,
  Body extends TodoBody[Keys]
>(
  id: string,
  body: Body
): Promise<CustomResponse<UpdateTodoResponse<Keys>> | undefined> => {
  try {
    return await patchData({
      baseUrl: domain,
      path: `/todo/${id}`,
      body: JSON.stringify(body),
    });
  } catch (error) {
    return undefined;
  }
};

export const deleteTodo = async (
  id: string
): Promise<CustomResponse<DeleteTodoResponse> | undefined> => {
  try {
    return await deleteData({ baseUrl: domain, path: `/todo/${id}` });
  } catch (error) {
    return undefined;
  }
};
