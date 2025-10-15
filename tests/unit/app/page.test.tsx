import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page", () => {
  it("shows the hero content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Get Started" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Next.js logo" }),
    ).toBeInTheDocument();
  });

  it("renders the quick links cards", () => {
    render(<Home />);

    expect(
      screen.getAllByText("Explore Next.js tutorials and documentation").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Browse templates and example projects").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Visit the official Next.js website").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Learn more" }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "View examples" }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Go to nextjs.org" }).length,
    ).toBeGreaterThan(0);
  });
});
