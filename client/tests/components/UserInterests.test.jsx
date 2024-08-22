import { render, screen, waitFor } from "@testing-library/react";
import UserInterests from './../../src/components/UserInterests';
import { server } from "../mocks/server";
import { http } from "msw";
import { userInterests } from './../data/userInterests';

describe('UserInterests Component', () => {
  it('should render the UserInterests component', () => {
    render(<UserInterests />)
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render all users interests after initial loading', async () => {
    render(<UserInterests />);

    // Wait for the interests to be loaded and rendered
    await waitFor(() => {
      const interestCard = screen.getAllByTestId("interests-card", { exact: false });
      expect(interestCard).toHaveLength(userInterests.length);
    });

  });

  it('should render a message when no interests are available', async () => {
    server.use(
      http.get(`${import.meta.env.VITE_API_URL}/interests`, (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    render(<UserInterests />);

    // Wait for the interests to be loaded and rendered
    await waitFor(() => {
      expect(screen.getByText(/no interests available/i)).toBeInTheDocument();
    });
  });
})