import { TodoBody } from './TodoBody';
import { TodoResponse } from './TodoResponse';

export interface UpdateTodoResponse<
  T extends keyof Pick<TodoBody, 'title' | 'description'>
> {
  isSuccess: boolean;
  data: Pick<TodoResponse, T>;
}
