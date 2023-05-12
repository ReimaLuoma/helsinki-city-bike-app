import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('Nav component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  });

  test('renders navigation links', () => {
    const navLinks = [
      { text: 'Data Import', imageSrc: '/src/assets/icons8-import-csv-100.png' },
      { text: 'Stations', imageSrc: '/src/assets/icons8-bike-parking-100.png' },
      { text: 'Journeys', imageSrc: '/src/assets/icons8-waypoint-map-100.png' },
    ];

    const linkElements = [
      screen.getByTestId('data-import-link'),
      screen.getByTestId('stations-link'),
      screen.getByTestId('journeys-link'),
    ];

    expect(linkElements.length).toBe(navLinks.length);

    linkElements.forEach((linkElement, index) => {
      const image = linkElement.querySelector('img');
      expect(linkElement).toHaveClass('nav-link');
      expect(image).toHaveAttribute('src', navLinks[index].imageSrc);
    });
  });
});
