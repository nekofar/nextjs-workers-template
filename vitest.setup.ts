import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

vi.mock("next/image", () => ({
  // Simplify Next.js Image to a native img for tests.
  default: ({
    alt,
    ...props
  }: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
  }) => React.createElement("img", { alt, ...props }),
}));
