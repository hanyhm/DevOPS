import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for toBeInTheDocument
import App from './App';

test('Button component renders correctly', () => {
  render(<h1>To do list App for testing DevOps tools !</h1>);
  const message = screen.getByText('To do list App for testing DevOps tools !');
  expect(message).toBeInTheDocument();
});
