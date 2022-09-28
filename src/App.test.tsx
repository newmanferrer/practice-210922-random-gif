import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { App } from './App';

describe('Test App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('test #1: should render title "Random Gif App", in the document', () => {
    const titleElement = screen.getByRole('heading', { level: 1, name: /^Random Gif App$/ });
    expect(titleElement).toBeInTheDocument();
  });

  it('test #2: should show loader component', async () => {
    expect(await screen.findByAltText(/^loader$/)).toBeInTheDocument();
  });

  it('test #3: should no show loader component', async () => {
    await waitForElementToBeRemoved(() => screen.queryByAltText(/^loader$/));
    expect(screen.queryByAltText(/^loader$/)).not.toBeInTheDocument();
  });

  it('test #4: should render loader and then disappear', async () => {
    expect(await screen.findByAltText(/^loader$/)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByAltText(/^loader$/));
    expect(screen.queryByAltText(/^loader$/)).not.toBeInTheDocument();
  });

  it('test #5: should render random img, in the document', async () => {
    const imgElement = await screen.findByRole('img', { name: /^gif random image$/ });
    expect(imgElement).toBeInTheDocument();
  });

  it('test #6: should render random fact paragraph, in the document', async () => {
    const paragraphElement = await screen.findByRole('randomFactParagraph');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('test #7: should render first three words paragrph, in the document', async () => {
    const paragraphElement = await screen.findByRole('firstThreeWordsParagrph');
    expect(paragraphElement).toBeInTheDocument();
  });
});
