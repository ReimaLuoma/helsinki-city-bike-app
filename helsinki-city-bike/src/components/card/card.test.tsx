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
    );
    container = renderResult.container.firstChild as HTMLElement;
  });

  test('renders the component', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('renders the header', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Card header');
  });

  test('renders the image with correct props', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Image alt');
  });

  test('renders a NavLink with the correct props', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/card');
  });

  test('clicking the NavLink navigates to the correct route', () => {
    
    render(<BrowserRouter><Card {...props} /></BrowserRouter>);
    const links = screen.queryAllByTestId('card-link');
    fireEvent.click(links[0]);
    expect(window.location.pathname).toBe('/card');
  });
});
