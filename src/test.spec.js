import { test, expect, describe } from "@jest/globals";
import { add } from "./jest-test.js";

describe("Math operations", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});