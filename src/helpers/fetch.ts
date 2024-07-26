import { CustomResponse } from '../types';

const getToken = (): string | undefined => {
  // TODO: get from cookie
  return '';
};

const parseResponse = async (response: Response) => {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
};

export const getData = async <ResponseDataType>(
  url: string,
  options?: RequestInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
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
  url: string,
  body?: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
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

export const putData = async <ResponseDataType>(
  url: string,
  body: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
  const response = await fetch(url, {
    method: `PUT`,
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
  url: string,
  body?: BodyInit
): Promise<CustomResponse<ResponseDataType>> => {
  const token = getToken();
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
