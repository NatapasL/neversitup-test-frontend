export interface PatchDataRequest {
  path: string;
  body: BodyInit;
  token?: string;
}
