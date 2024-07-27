import type { RawTodoResponse, TodoResponse } from './TodoResponse';

export interface CreateTodoResponse<T extends TodoResponse | RawTodoResponse> {
  isSuccess: boolean;
  data: T;
}
