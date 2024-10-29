import { it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

it("should add correctly", () => {
  const operand1 = 1;
  const operand2 = 1;

  const result = sum(operand1, operand2);

  const expectedValue = 2;
  assert.equal(result, expectedValue);
});
