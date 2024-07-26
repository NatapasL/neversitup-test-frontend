import { TodoResponse } from './TodoResponse';

export interface GetAllTodoResponse {
  isSuccess: boolean;
  data: TodoResponse[];
}
