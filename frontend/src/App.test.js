import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world from react', () => {
    render(<App />);
    const element = screen.getByText(/Hello World from React!/i);
    expect(element).toBeInTheDocument();
});
