import axios, { AxiosResponse, AxiosError } from 'axios';
import { IGiphyApi } from '@/models';

//* ---------------------------------------------
const api_key = 'PUT THE API KEY HERE';
//* ---------------------------------------------
const baseURL = 'https://api.giphy.com/v1/gifs';
const searchGif = `${baseURL}/search?api_key=${api_key}&limit=1&offset=0&rating=g&lang=en`;

export class GiphyApiError {
  hasError: boolean;
  message: string;

  constructor(hasError: boolean, message: string) {
    this.hasError = hasError;
    this.message = message;
  }
}

export const getGifFetch = async (query: string) => {
  try {
    const response = await fetch(`${searchGif}&q=${query}`);
    if (!response.ok) throw response;
    const responseJson: IGiphyApi = await response.json();
    return responseJson;
  } catch (error) {
    const startOfMessage = 'service getGifFetch Error:';
    const message =
      error instanceof Error
        ? `${startOfMessage} ${error.message}`
        : error instanceof Response
        ? error.status === 404
          ? `${startOfMessage} Not Found`
          : error.status === 401
          ? `${startOfMessage} Unauthorized`
          : `${startOfMessage} ${error.status}`
        : `${startOfMessage} something went wrong`;

    return new GiphyApiError(true, message);
  }
};

export const getGifAxios = async (query: string) => {
  try {
    const response = await axios.get<IGiphyApi, AxiosResponse<IGiphyApi, IGiphyApi>, IGiphyApi>(
      `${searchGif}&q=${query}`
    );
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const startOfMessage = 'service getGifAxios Error:';
    const message =
      error instanceof AxiosError
        ? error.response?.status === 404
          ? `${startOfMessage} 404 Not Found`
          : error.response?.status === 401
          ? `${startOfMessage} Unauthorized`
          : `${startOfMessage} ${error.message}`
        : `${startOfMessage} something went wrong`;

    return new GiphyApiError(true, message);
  }
};
