export type CustomResponse<ResponseDataType> = {
  status: number;
  statusText: string;
  data?: ResponseDataType | undefined;
};
