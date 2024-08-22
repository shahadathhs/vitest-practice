import { render, screen } from "@testing-library/react";
import UseState from "../../src/components/UseState";
import userEvent from "@testing-library/user-event";

describe('UseState Component', () => {
  const user = userEvent.setup();

  it('renders the UseState component with buttons 1', async() => {
    render(<UseState />)
    
    // screen.debug();
    const increment1 = screen.getByRole('button', { name: 'Increment' });
    expect(increment1).toHaveTextContent(/increment/i);
    
    const decrement1 = screen.getByRole('button', { name: 'Decrement' });
    expect(decrement1).toHaveTextContent(/decrement/i);
    
    const count1 = screen.getByText(/count1/i);
    expect(count1).toHaveTextContent(/count1: 0/i);

    await user.click(increment1);
    expect(count1).toHaveTextContent(/count1: 1/i);

    await user.click(decrement1);
    expect(count1).toHaveTextContent(/count1: 0/i);
  });

  it('renders the UseState component with buttons 2', async () => {
    render(<UseState />)
    
    // screen.debug();
    const increment1 = screen.getByRole('button', { name: /increment - 2/i });
    expect(increment1).toHaveTextContent(/increment - 2/i);
    
    const decrement1 = screen.getByRole('button', { name: /decrement - 2/i });
    expect(decrement1).toHaveTextContent(/decrement - 2/i);
    
    const count1 = screen.getByText(/count2/i);
    expect(count1).toHaveTextContent(/count2: 0/i);

    await user.click(increment1);
    expect(count1).toHaveTextContent(/count2: 1/i);

    await user.click(decrement1);
    expect(count1).toHaveTextContent(/count2: 0/i);

  });
})