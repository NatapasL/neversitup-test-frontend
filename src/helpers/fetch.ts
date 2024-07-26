import {
  CustomResponse,
  DeleteDataRequest,
  GetDataRequest,
  PatchDataRequest,
  PostDataRequest,
} from '../types';

export const parseResponse = async (response: Response) => {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
};

export const getData = async <ResponseDataType>({
  baseUrl,
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
  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const postData = async <ResponseDataType>({
  baseUrl,
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
  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const patchData = async <ResponseDataType>({
  baseUrl,
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
  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const deleteData = async <ResponseDataType>({
  baseUrl,
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
  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};
