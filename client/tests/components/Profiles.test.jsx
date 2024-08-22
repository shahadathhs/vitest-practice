import { render, screen, waitFor } from "@testing-library/react";
import Profiles from "../../src/components/Profiles";
import { profile } from './../data/profile';
import { http } from "msw";
import { server } from "./../mocks/server"

describe("Profiles component", () => {
  it("should render with initial loading text", () => {
    render(<Profiles />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should render all profiles after initial loading", async () => {
    render(<Profiles />);

    // Wait for the profiles to be loaded and rendered
    await waitFor(() => {
      const profileCard = screen.getAllByTestId("profile-card", { exact: false });  
      expect(profileCard).toHaveLength(profile.length);
    });
  });

  it("should render a message when no profile is available", async () => {
    server.use(
      http.get(`${import.meta.env.VITE_API_URL}/profiles`, (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    render(<Profiles />);
    
    // Wait for the interests to be loaded and rendered
    await waitFor(() => {
      expect(screen.getByText(/no interests available/i)).toBeInTheDocument();
    });
  });
});
