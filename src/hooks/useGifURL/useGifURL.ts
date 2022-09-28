import { useState, useEffect } from 'react';
import { getGifAxios, GiphyApiError } from '@/services';
import { useRandomFact } from '../';

interface IError {
  hasError: boolean;
  message: string;
}

const errorInitialState: IError = {
  hasError: false,
  message: ''
};

export const useGifURL = () => {
  const { randomFact, firstThreeWords } = useRandomFact();
  const [gifURLIsLoading, setGifURLIsLoading] = useState(false);
  const [giftURLError, setGiftURLError] = useState(errorInitialState);
  const [gifURL, setGifURL] = useState('');

  const handleError = (error: any) => {
    setGiftURLError({
      hasError: true,
      message: error.message
    });
  };

  useEffect(() => {
    let isMounted = true;
    setGifURLIsLoading(true);
    setGiftURLError(errorInitialState);

    getGifAxios(firstThreeWords)
      .then(response => {
        if (response instanceof GiphyApiError) throw response;
        const url = response?.data[0]?.images?.original?.url;
        if (isMounted) setGifURL(url);
      })
      .catch(error => handleError(error))
      .finally(() => setGifURLIsLoading(false));

    return () => {
      isMounted = false;
    };
  }, [randomFact]);

  return { gifURL, gifURLIsLoading, giftURLError };
};
