import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar contact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Me/i);
  expect(linkElement).toBeInTheDocument();
});
