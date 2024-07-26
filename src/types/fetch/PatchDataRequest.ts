export interface PatchDataRequest {
  baseUrl: string;
  path: string;
  body: BodyInit;
  token?: string;
}
