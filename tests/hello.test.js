import { describe, it, expect } from "vitest";

export function greet() {
  return 'Hello, world!';
}

describe("sanity check", () => {
  it("verify test runner works", () => {
    expect(greet()).toBe("Hello, world!");
  });
});
