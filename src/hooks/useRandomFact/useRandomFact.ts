import { useState, useEffect } from 'react';
import { getRandomFactFetch, CatFactApiError } from '@/services';

interface IError {
  hasError: boolean;
  message: string;
}

const errorInitialState: IError = {
  hasError: false,
  message: ''
};

export const useRandomFact = () => {
  const [randonFactIsLoading, setRandonFactIsLoading] = useState(false);
  const [randomFactError, setRandomFactError] = useState(errorInitialState);
  const [randomFact, setRandomFact] = useState('');
  const [firstThreeWords, setFirstThreeWords] = useState('');

  const handleError = (error: any) => {
    setRandomFactError({
      hasError: true,
      message: error.message
    });
  };

  useEffect(() => {
    let isMounted = true;
    setRandonFactIsLoading(true);
    setRandomFactError(errorInitialState);

    getRandomFactFetch()
      .then(response => {
        if (response instanceof CatFactApiError) throw response;
        const fact = response.fact;
        const words = fact.split(' ', 3).join(' ');

        if (isMounted) {
          setRandomFact(fact);
          setFirstThreeWords(words);
        }
      })
      .catch(error => handleError(error))
      .finally(() => setRandonFactIsLoading(false));

    return () => {
      isMounted = false;
    };
  }, []);

  return { randomFact, firstThreeWords, randonFactIsLoading, randomFactError };
};
