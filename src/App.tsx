import { useRandomFact, useGifURL } from './hooks';
import {
  GlobalStyles,
  Title,
  Loader,
  Message,
  GridContainer,
  FlexContainer,
  Paragraph,
  Img
} from '@/components';

export const App = () => {
  const { randomFact, firstThreeWords, randonFactIsLoading, randomFactError } = useRandomFact();
  const { gifURL, giftURLError } = useGifURL();

  return (
    <>
      <GlobalStyles />
      <Title text='Random Gif App' />

      {randonFactIsLoading && <Loader />}

      {((!randonFactIsLoading && randomFactError.hasError) || giftURLError.hasError) && (
        <Message
          type='error'
          text={randomFactError.hasError ? randomFactError.message : giftURLError.message}
          ariaLabel='errorContainer'
        />
      )}

      {!randonFactIsLoading && !randomFactError.hasError && !giftURLError.hasError && (
        <GridContainer>
          <FlexContainer>
            <Img src={gifURL} alt='gif random image' />
          </FlexContainer>

          <FlexContainer>
            <Paragraph text={randomFact} color='yellow' role='randomFactParagraph' />
            <Paragraph text={firstThreeWords} color='orangered' role='firstThreeWordsParagrph' />
          </FlexContainer>
        </GridContainer>
      )}
    </>
  );
};
