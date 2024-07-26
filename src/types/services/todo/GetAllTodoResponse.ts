import { RawTodoResponse, TodoResponse } from './TodoResponse';

export interface GetAllTodoResponse<T extends TodoResponse | RawTodoResponse> {
  isSuccess: boolean;
  data: T[];
}
