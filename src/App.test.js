import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header';
test('expect about link in the page', () => {
  render(<Header />);
  const linkElement = screen.getByText("About");
  expect(linkElement).toBeInTheDocument();
});
