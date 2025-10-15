import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

vi.mock("next/image", () => ({
  // Simplify Next.js Image to a native img for tests.
  default: ({ alt, ...rest }: any) => {
    // Strip Next.js-specific props that are invalid on <img>
    const {
      priority: _priority,
      fill: _fill,
      loader: _loader,
      quality: _quality,
      sizes: _sizes,
      ...props
    } = rest ?? {};
    return React.createElement("img", { alt, ...props });
  },
}));
