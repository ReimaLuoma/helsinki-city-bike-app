import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageContainer from './page-container';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeEach(() => {
  render(
    <BrowserRouter>
      <PageContainer />
    </BrowserRouter>
  );
});

test('PageContainer should contain a container-fluid element', () => {
  expect(screen.getByTestId('container-fluid')).toBeInTheDocument();
});

test('PageContainer should contain a row element', () => {
  expect(screen.getByTestId('row')).toBeInTheDocument();
});

test('PageContainer should contain a col-lg-2 element with Nav component', () => {
  expect(screen.getByTestId('col-lg-2')).toBeInTheDocument();
  expect(screen.getByTestId('nav')).toBeInTheDocument();
});

test('PageContainer should contain a col element with ActionField component', () => {
  expect(screen.getByTestId('col')).toBeInTheDocument();
  expect(screen.getByTestId('action-field')).toBeInTheDocument();
});
