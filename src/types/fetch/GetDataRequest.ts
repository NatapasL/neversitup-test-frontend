export interface GetDataRequest {
  baseUrl: string;
  path: string;
  options?: RequestInit;
  token: string;
}
