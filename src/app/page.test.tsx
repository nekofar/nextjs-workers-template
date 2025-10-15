import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

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
      screen.getByText("Explore Next.js tutorials and documentation"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Browse templates and example projects"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Visit the official Next.js website"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Learn more" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View examples" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Go to nextjs.org" }),
    ).toBeInTheDocument();
  });
});
