import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Logo from './logo';

function renderWithRouter(ui: React.ReactElement, { route = '/' }: { route?: string } = {}): RenderResult {
  window.history.pushState({}, 'Test page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
}

describe('Logo component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Logo />);
  });

  it('renders the Helsinki City Bikes logo', () => {
    const { getByAltText } = renderWithRouter(<Logo />);
    const logo = getByAltText('Helsinki City Bikes Logo') as HTMLImageElement;
    expect(logo instanceof HTMLImageElement).toBe(true);
    expect(logo.src.endsWith('/assets/helsinki-city-bikes-logo.png')).toBe(true);
    //const linkElement = getByRole('link', { name: 'Helsinki City Bikes Logo' });
    //expect(linkElement).toHaveAttribute('href', '/');
  });

  it('renders the cyclist image', () => {
    const { getByAltText } = renderWithRouter(<Logo />);
    const cyclist = getByAltText('Cyclist') as HTMLImageElement;
    expect(cyclist instanceof HTMLImageElement).toBe(true);
    expect(cyclist.src.endsWith('/assets/3601659.png')).toBe(true);
  });
});
