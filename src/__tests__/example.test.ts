import { add } from "../App";
import { describe, it, expect } from "vitest";

describe("Example Test", () => {
	it("should return true for true", () => {
		expect(true).toBe(true);
	});

	it("adds", () => {
		expect(add(2, 2)).toBe(4);
	});
});
