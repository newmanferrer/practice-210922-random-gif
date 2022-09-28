import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import { useGifURL } from './useGifURL';

//* ---------------------------------------------
const giphyURL = 'PUT THE URL WITH THE API KEY HERE';
//* ---------------------------------------------

describe('Test useGifURL Hook', () => {
  it('test #1: should render loader', async () => {
    const { result } = renderHook(() => useGifURL());
    expect(result.current.gifURLIsLoading).toBe(true);
  });

  it('test #2: should no render loader', async () => {
    const { result, waitForValueToChange } = renderHook(() => useGifURL());

    await waitForValueToChange(() => result.current.gifURLIsLoading);
    expect(result.current.gifURLIsLoading).toBe(false);
  });

  it('test #3: should render loader and then disappear', async () => {
    const { result, waitForValueToChange } = renderHook(() => useGifURL());

    expect(result.current.gifURLIsLoading).toBe(true);
    await waitForValueToChange(() => result.current.gifURLIsLoading);
    expect(result.current.gifURLIsLoading).toBe(false);
  });

  it('test #4: should get data "useGifURL"', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGifURL());

    await waitForNextUpdate();
    expect(result.current.gifURL).toBeDefined();
    expect(result.current.gifURL).toBeTruthy();
  });

  it('test #5: should show error message "service getGifAxios Error: 404 Not Found"', async () => {
    server.use(
      rest.get(giphyURL, (_req, res, ctx) => {
        return res(ctx.delay(), ctx.status(404));
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useGifURL());

    await waitForNextUpdate();
    expect(result.current.giftURLError.hasError).toBe(true);
    expect(result.current.giftURLError.hasError).toBeTruthy();
    expect(result.current.giftURLError.message).toContain(
      'service getGifAxios Error: 404 Not Found'
    );
  });
});
