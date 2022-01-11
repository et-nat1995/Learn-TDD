import { render, screen } from '@testing-library/react';
import App from './App';


describe('Counter Testing', () => {
  test('Render the title of the counter.', () => {
    render(<App />);
    const linkElement = screen.getByText('This is counter app.');
    expect(linkElement).toBeInTheDocument();
  });
})
