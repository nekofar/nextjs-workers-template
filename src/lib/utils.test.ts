import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("concatenates truthy class names", () => {
    expect(cn("px-2", undefined, null, "text-sm")).toBe("px-2 text-sm");
  });

  it("deduplicates conflicting tailwind utilities", () => {
    expect(cn("px-2", "px-4", "text-sm", "text-base")).toBe("px-4 text-base");
  });
});
