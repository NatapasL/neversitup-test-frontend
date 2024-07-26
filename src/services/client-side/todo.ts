import { deleteData, getData, patchData, postData } from '../../helpers/fetch';
import {
  CreateTodoResponse,
  CustomResponse,
  DeleteTodoResponse,
  GetAllTodoResponse,
  TodoBody,
  UpdateTodoResponse,
} from '../../types';

const domain = `http://localhost:3000/api`;

export const getAllTodo = async (): Promise<
  CustomResponse<GetAllTodoResponse> | undefined
> => {
  try {
    console.log(`get all todo`);
    // const token = cookies().get(`token`)?.value;
    // console.log(token);
    // if (!token) throw new Error(`no token`);
    return await getData(
      `https://candidate-assignment.neversitup.com`,
      `/todo`,
      undefined,
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1PMmhIRVZHdmZ5QlBxemZoRXhGIiwiaWF0IjoxNzIxOTg4MDIxLCJleHAiOjE3MjIwNzQ0MjF9.TDZNi-l1jyuyQXPH-wUjNhmVOA27LLNKrkYiOmaYzl0`
    );
  } catch (error) {
    return undefined;
  }
};

export const createTodo = async (
  body: TodoBody
): Promise<CustomResponse<CreateTodoResponse> | undefined> => {
  try {
    return await postData(domain, `/todo`, JSON.stringify(body));
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
    return await patchData(domain, `/todo/${id}`, JSON.stringify(body));
  } catch (error) {
    return undefined;
  }
};

export const deleteTodo = async (
  id: string
): Promise<CustomResponse<DeleteTodoResponse> | undefined> => {
  try {
    return await deleteData(domain, `/todo/${id}`);
  } catch (error) {
    return undefined;
  }
};
