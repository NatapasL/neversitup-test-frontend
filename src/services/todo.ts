import { API_BASE_URL } from '../constants/api-url';
import { deleteData, getData, patchData, postData } from '../helpers';
import {
  CreateTodoResponse,
  CustomResponse,
  DeleteTodoResponse,
  GetAllTodoResponse,
  TodoFormValues,
  UpdateTodoResponse,
} from '../types';

export const getAllTodo = async (): Promise<
  CustomResponse<GetAllTodoResponse> | undefined
> => {
  try {
    return await getData(API_BASE_URL, `/todo`);
  } catch (error) {
    return undefined;
  }
};

export const createTodo = async (
  formValues: TodoFormValues
): Promise<CustomResponse<CreateTodoResponse> | undefined> => {
  try {
    return await postData(API_BASE_URL, `/todo`, JSON.stringify(formValues));
  } catch (error) {
    return undefined;
  }
};

export const updateTodo = async <
  Keys extends keyof Partial<TodoFormValues>,
  FormValues extends TodoFormValues[Keys]
>(
  id: string,
  formValues: FormValues
): Promise<CustomResponse<UpdateTodoResponse<Keys>> | undefined> => {
  try {
    return await patchData(
      API_BASE_URL,
      `/todo/${id}`,
      JSON.stringify(formValues)
    );
  } catch (error) {
    return undefined;
  }
};

export const deleteTodo = async (
  id: string
): Promise<CustomResponse<DeleteTodoResponse> | undefined> => {
  try {
    return await deleteData(API_BASE_URL, `/todo/${id}`);
  } catch (error) {
    return undefined;
  }
};
