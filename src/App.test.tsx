import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import App from "@/App";
import { usePortfolioStore } from "@/store/usePortfolioStore";

describe("Portfolio app", () => {
  beforeEach(() => {
    usePortfolioStore.setState({ activeCategory: "all" });
    window.history.pushState({}, "", "/");
  });

  it("renders the home page hero and lets visitors navigate to the work archive", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /himadri jain shapes words, ideas, and digital storytelling into work that feels alive/i,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /view selected work/i }));

    expect(
      await screen.findByRole("heading", {
        name: /a structured archive of campaigns, writing, strategy, and independent work/i,
      }),
    ).toBeInTheDocument();
  });

  it("filters projects on the work page", async () => {
    const user = userEvent.setup();
    window.history.pushState({}, "", "/work");

    render(<App />);

    expect(screen.getAllByText(/netflix passport/i).length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: /social strategy/i }));

    expect(screen.getByText(/diwali organic social campaign/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/netflix passport/i)).toHaveLength(0);
  });
});
