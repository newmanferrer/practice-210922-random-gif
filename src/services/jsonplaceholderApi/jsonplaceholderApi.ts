import axios, { AxiosResponse, AxiosError } from 'axios';
import { IUser } from '../../models';

const baseURL = 'https://jsonplaceholder.typicode.com';
const users = `${baseURL}/users`;

export class jsonplaceholderApiError {
  hasError: boolean;
  message: string;

  constructor(hasError: boolean, message: string) {
    this.hasError = hasError;
    this.message = message;
  }
}

export const getAllUsersFetch = async () => {
  try {
    const response = await fetch(users);
    if (!response.ok) throw response;
    const responseJson: IUser[] = await response.json();
    return responseJson;
  } catch (error) {
    const startOfMessage = 'service getAllUsersFetch error:';
    const message =
      error instanceof Error
        ? `${startOfMessage} ${error.message}`
        : error instanceof Response
        ? error.status === 404
          ? `${startOfMessage} 404 Not Found`
          : `${startOfMessage} ${error.status}`
        : `${startOfMessage} Something went wrong`;

    return new jsonplaceholderApiError(true, message);
  }
};

export const getAllUsersAxios = async () => {
  try {
    const response = await axios.get<IUser[], AxiosResponse<IUser[], IUser[]>, IUser[]>(users);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const startOfMessage = 'service getAllUsersFetch error:';
    const message =
      error instanceof AxiosError
        ? `${startOfMessage} ${error.message}`
        : `${startOfMessage} Something went wrong`;

    return new jsonplaceholderApiError(true, message);
  }
};
