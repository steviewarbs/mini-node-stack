import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mini Node Stack text', () => {
  render(<App />);
  const appHeader = screen.getByText(/Mini Node Stack/i);
  expect(appHeader).toBeInTheDocument();
});
