import { TodoResponse } from './TodoResponse';

export interface CreateTodoResponse {
  isSuccess: boolean;
  data: TodoResponse;
}
