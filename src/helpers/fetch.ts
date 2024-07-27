import { handleUnauthorized } from '../authentication';
import type {
  CustomResponse,
  DeleteDataRequest,
  GetDataRequest,
  PatchDataRequest,
  PostDataRequest,
} from '../types';

const baseUrl = process.env.API_BASE_URL ?? ``;

export const parseResponse = async (response: Response) => {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
};

export const getData = async <ResponseDataType>({
  path,
  token,
  options,
}: GetDataRequest): Promise<CustomResponse<ResponseDataType>> => {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `GET`,
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });
  if (response.status === 401) {
    handleUnauthorized();
    throw new Error(`Un`);
  }

  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const postData = async <ResponseDataType>({
  path,
  token,
  body,
}: PostDataRequest): Promise<CustomResponse<ResponseDataType>> => {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `POST`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`,
    },
    body: body,
  });

  if (response.status === 401) {
    handleUnauthorized();
  }

  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const patchData = async <ResponseDataType>({
  path,
  token,
  body,
}: PatchDataRequest): Promise<CustomResponse<ResponseDataType>> => {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `PATCH`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`,
    },
    body: body,
  });

  if (response.status === 401) {
    handleUnauthorized();
  }

  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const deleteData = async <ResponseDataType>({
  path,
  token,
  body,
}: DeleteDataRequest): Promise<CustomResponse<ResponseDataType>> => {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `DELETE`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`,
    },
    body: body,
  });

  if (response.status === 401) {
    handleUnauthorized();
  }

  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};
