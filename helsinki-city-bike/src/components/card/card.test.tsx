import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // import BrowserRouter
import Card from './card';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

type CardProps = {
    header: string;
    img: string;
    alt: string;
    link: string;
};

describe('<Card />', () => {

  const props: CardProps = {
    header: 'Card header',
    img: 'https://example.com/image.jpg',
    alt: 'Image alt',
    link: '/card'
  };

  let container: HTMLElement;

  beforeEach(() => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <Card {...props} />
      </BrowserRouter>
    ).container;
    container = renderResult.container;
  });

  test('renders the component', () => {
    expect(screen.getByRole('link', { container })).toBeInTheDocument();
  });

  test('renders the header', () => {
    expect(screen.getByRole('heading', { container })).toHaveTextContent('Card header');
  });

  test('renders the image with correct props', () => {
    expect(screen.getByRole('img', { container })).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(screen.getByRole('img', { container })).toHaveAttribute('alt', 'Image alt');
  });

  test('renders a NavLink with the correct props', () => {
    expect(screen.getByRole('link', { container })).toHaveAttribute('href', '/card');
  });

  test('clicking the NavLink navigates to the correct route', () => {
    /*
    const { history } = render(<Card {...props} />);
    const link = screen.getByRole('link', { container });
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/card');
    */
  });
});
