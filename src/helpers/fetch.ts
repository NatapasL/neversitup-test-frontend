import { CustomResponse } from '../types';

const getToken = (): string | undefined => {
  // TODO: get from cookie
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1PMmhIRVZHdmZ5QlBxemZoRXhGIiwiaWF0IjoxNzIxOTc2NDE2LCJleHAiOjE3MjIwNjI4MTZ9.VzwEevvVVl6E78XhIoZaiUfYhhgR3srlLXbzTUfBrPM';
};

const parseResponse = async (response: Response) => {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
};

export const getData = async <ResponseDataType>(
  baseUrl: string,
  path: string,
  options?: RequestInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `GET`,
    headers: {
      Authorization: token ?? ``,
    },
    ...options,
  });
  const resJSON = await parseResponse(response);
  return {
    status: response.status,
    statusText: response.statusText,
    data: resJSON,
  };
};

export const postData = async <ResponseDataType>(
  baseUrl: string,
  path: string,
  body?: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `POST`,
    headers: {
      Authorization: token ?? ``,
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

export const patchData = async <ResponseDataType>(
  baseUrl: string,
  path: string,
  body: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `PATCH`,
    headers: {
      Authorization: token ?? ``,
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

export const deleteData = async <ResponseDataType>(
  baseUrl: string,
  path: string,
  body?: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    method: `DELETE`,
    headers: {
      Authorization: token ?? ``,
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
