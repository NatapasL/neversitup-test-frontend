import type { TodoResponse } from './TodoResponse';

export interface GetTodoResponse {
  isSuccess: boolean;
  data: TodoResponse;
}
