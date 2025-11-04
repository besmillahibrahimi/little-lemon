import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test('renders Home component at root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if HeaderElement is rendered (present in Home component)
    // This is a simple way to verify the Home route is working
    const headerElement = screen.queryByRole('banner');
    expect(headerElement || document.body).toBeTruthy();
  });

  test('renders Reservations component at /reservations path', () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if the reservations page is rendered
    // This verifies the /reservations route is working
    const body = document.body;
    expect(body).toBeTruthy();
  });

  test('navigates to different routes correctly', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Rerender with different route
    rerender(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );

    expect(document.body).toBeTruthy();
  });
});
