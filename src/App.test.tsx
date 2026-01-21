import { render, screen } from '@testing-library/react';
import App from './App';

test('renders restaurant landing pages', () => {
  render(<App />);
  const titleElement = screen.getByText(/Restaurant Landing Pages/i);
  expect(titleElement).toBeInTheDocument();
});
