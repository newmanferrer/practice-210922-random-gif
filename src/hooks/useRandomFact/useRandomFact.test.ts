import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { useRandomFact } from './useRandomFact';
import { server } from '../../mocks/server';

const catFactURL = 'https://catfact.ninja/fact';

describe('Test useRandomFact Hook', () => {
  it('test #1: should render loader', async () => {
    const { result } = renderHook(() => useRandomFact());
    expect(result.current.randonFactIsLoading).toBe(true);
  });

  it('test #2: should no render loader', async () => {
    const { result, waitForValueToChange } = renderHook(() => useRandomFact());

    await waitForValueToChange(() => result.current.randonFactIsLoading);
    expect(result.current.randonFactIsLoading).toBe(false);
  });

  it('test #3: should render loader and then disappear', async () => {
    const { result, waitForValueToChange } = renderHook(() => useRandomFact());

    expect(result.current.randonFactIsLoading).toBe(true);
    await waitForValueToChange(() => result.current.randonFactIsLoading);
    expect(result.current.randonFactIsLoading).toBe(false);
  });

  it('test #4: should get data "randomFact"', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRandomFact());

    await waitForNextUpdate();
    expect(result.current.randomFact).toBeDefined();
    expect(result.current.randomFact).toBeTruthy();
  });

  it('test #5: should get data "first three words"', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRandomFact());

    await waitForNextUpdate();
    expect(result.current.firstThreeWords).toBeDefined();
    expect(result.current.firstThreeWords).toBeTruthy();
  });

  it('test #6: should show error message "service getRandomFactFetch Error"', async () => {
    server.use(
      rest.get(catFactURL, (_req, res, ctx) => {
        return res(ctx.delay(), ctx.status(404));
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useRandomFact());

    await waitForNextUpdate();
    expect(result.current.randomFactError.hasError).toBe(true);
    expect(result.current.randomFactError.hasError).toBeTruthy();
    expect(result.current.randomFactError.message).toContain('service getRandomFactFetch Error');
  });
});
