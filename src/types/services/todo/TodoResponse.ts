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
