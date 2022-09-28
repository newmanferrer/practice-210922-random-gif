import axios, { AxiosResponse, AxiosError } from 'axios';
import { IFact } from '@/models';

const baseURL = 'https://catfact.ninja';
const randomFact = `${baseURL}/fact`;
const listFacts = `${baseURL}/facts`;
const listBreeds = `${baseURL}/breeds`;

export class CatFactApiError {
  hasError: boolean;
  message: string;

  constructor(hasError: boolean, message: string) {
    this.hasError = hasError;
    this.message = message;
  }
}

export const getRandomFactFetch = async () => {
  try {
    const response = await fetch(randomFact);
    const responseJson: IFact = await response.json();
    return responseJson;
  } catch (error) {
    const startOfMessage = 'service getRandomFactFetch Error:';
    const message =
      error instanceof Error
        ? `${startOfMessage} ${error.message}`
        : `${startOfMessage} something went wrong`;

    return new CatFactApiError(true, message);
  }
};

export const getRandomFactAxios = async () => {
  try {
    const response = await axios.get<IFact, AxiosResponse<IFact, IFact>, IFact>(randomFact);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const startOfMessage = 'service getRandomFactAxios Error:';
    const message =
      error instanceof AxiosError
        ? `${startOfMessage} ${error.message}`
        : `${startOfMessage} something went wrong`;

    return new CatFactApiError(true, message);
  }
};
