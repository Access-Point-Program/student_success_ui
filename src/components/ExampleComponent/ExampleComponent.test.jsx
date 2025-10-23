import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ExampleComponent from './ExampleComponent';

test('renders greeting with name prop', () => {
  render(<ExampleComponent name="Bryan" />);
  expect(screen.getByText('Hello, Bryan!')).toBeInTheDocument();
});

test('increments counter when button is clicked', async () => {
  const user = userEvent.setup();
  render(<ExampleComponent />);
  const btn = screen.getByRole('button', { name: /Clicked 0 times/i });
  await user.click(btn);
  expect(screen.getByRole('button', { name: /Clicked 1 times/i }))
    .toBeInTheDocument();
});