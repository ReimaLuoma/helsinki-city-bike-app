import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardContainer from './card-container';
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

const mockContext = {
  data: [],
  stations: [],
  journeys: [],
};

const MyContext = React.createContext(mockContext);

describe('CardContainer', () => {
  beforeEach(() => {
    render(
      <MyContext.Provider value={mockContext}>
        <MemoryRouter initialEntries={['/']}>
          <CardContainer />
        </MemoryRouter>
      </MyContext.Provider>
    );
  });

  test('renders all card headers', () => {
    expect(screen.getByText('import')).toBeDefined();
    expect(screen.getByText('stations')).toBeDefined();
    expect(screen.getByText('journeys')).toBeDefined();
  });

  test('renders all card images', () => {
    expect(screen.getByAltText('import')).toHaveAttribute('src', '/src/assets/icons8-import-csv-100.png');
    expect(screen.getByAltText('stations')).toHaveAttribute('src', '/src/assets/icons8-bike-parking-100.png');
    expect(screen.getByAltText('journeys')).toHaveAttribute('src', '/src/assets/icons8-waypoint-map-100.png');
  });

  test('renders all card links', () => {
    const importCard = screen.getByText('import');
    const stationsCard = screen.getByText('stations');
    const journeysCard = screen.getByText('journeys');

    console.log('before clicking import', window.location.pathname);
    fireEvent.click(importCard);
    console.log('after clicking import', window.location.pathname);
    expect(window.location.pathname).toBe('/data-import');

    console.log('before clicking stations', window.location.pathname);
    fireEvent.click(stationsCard);
    console.log('after clicking stations', window.location.pathname);
    expect(window.location.pathname).toBe('/stations');

    console.log('before clicking journeys', window.location.pathname);
    fireEvent.click(journeysCard);
    console.log('after clicking journeys', window.location.pathname);
    expect(window.location.pathname).toBe('/journeys');
  });
});
