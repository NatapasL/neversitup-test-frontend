import { TodoResponse } from './TodoResponse';

export interface UpdateTodoResponse<
  T extends keyof Partial<Pick<TodoResponse, 'title' | 'description'>>
> {
  isSuccess: boolean;
  data: Pick<TodoResponse, T>;
}
