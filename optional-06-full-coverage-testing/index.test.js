import { describe, it } from "node:test";
import { equal, throws } from "node:assert";
import sum from "./index.js";

describe("Sum Calculator", () => {
  it("should add correctly", () => {
    const operand1 = 1;
    const operand2 = 1;

    const result = sum(operand1, operand2);

    const expectedValue = 2;
    equal(result, expectedValue);
  });

  it("should return 0 if operand1 is not a number", () => {
    const operand1 = "1";
    const operand2 = 1;

    const result = sum(operand1, operand2);
    const expectedValue = 0;
    equal(result, expectedValue);
  });

  it("should return 0 if operand2 is not a number", () => {
    const operand1 = 1;
    const operand2 = "1";

    const result = sum(operand1, operand2);
    const expectedValue = 0;
    equal(result, expectedValue);
  });

  it("should return 0 if operand1 or operand2 is negative", () => {
    const operand1 = -1;
    const operand2 = 1;

    const result = sum(operand1, operand2);
    const expectedValue = 0;
    equal(result, expectedValue);
  });
});
