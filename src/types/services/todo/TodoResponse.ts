export interface RawTodoResponse {
  created_by: TodoResponseCreatedBy;
  created_at: string;
  updated_at: string;
  description: string;
  id: string;
  title: string;
}

export interface TodoResponse {
  createdBy: TodoResponseCreatedBy;
  createdAt: string;
  updatedAt: string;
  description: string;
  id: string;
  title: string;
}

interface TodoResponseCreatedBy {
  id: string;
  username: string;
}
