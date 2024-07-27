import type { TodoBody } from './TodoBody';
import type { TodoResponse } from './TodoResponse';

export interface UpdateTodoResponse<
  T extends keyof Pick<TodoBody, 'title' | 'description'>
> {
  isSuccess: boolean;
  data: Pick<TodoResponse, T>;
}
