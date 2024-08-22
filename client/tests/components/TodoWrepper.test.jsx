import { render, screen, waitFor } from '@testing-library/react';
import TodoWrapper from './../../src/components/TodoWrapper';
import userEvent from '@testing-library/user-event';

describe('TodoWrapper Component', () => {
  const user = userEvent.setup();

  it('should render with title and add input-button', () => {
    render(<TodoWrapper />);

    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter a new todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    expect(screen.getByText(/no todos available/i)).toBeInTheDocument();
  });

  it('should add a new todo', async () => {
    render(<TodoWrapper />);

    const input = screen.getByPlaceholderText(/enter a new todo/i);
    const select = screen.getByRole('combobox');
    const button = screen.getByRole('button', { name: /add/i });

    await user.type(input, 'Buy milk');
    await user.selectOptions(select, 'true');
    await user.click(button);

    // Verify the new todo is added
    expect(await screen.findByText(/buy milk - completed/i)).toBeInTheDocument();
  });
});
