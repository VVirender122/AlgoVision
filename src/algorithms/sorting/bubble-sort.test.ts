import { describe, expect, it } from "vitest";
import { runBubbleSort } from "./run-bubble-sort";

describe("runBubbleSort", () => {
  it("sorts numbers in ascending order", () => {
    const input = [5, 3, 8, 1];

    const { result } = runBubbleSort(input, "bubble-sort-test-1");

    expect(result).toEqual([1, 3, 5, 8]);
  });

  it("does not modify the original input", () => {
    const input = [5, 3, 8, 1];

    runBubbleSort(input, "bubble-sort-test-2");

    expect(input).toEqual([5, 3, 8, 1]);
  });

  it("records comparison, swap, and sorted events", () => {
    const { trace } = runBubbleSort([5, 3, 8, 1], "bubble-sort-test-3");

    const eventTypes = trace.events.map((event) => event.type);

    expect(eventTypes).toContain("START");
    expect(eventTypes).toContain("COMPARE");
    expect(eventTypes).toContain("SWAP");
    expect(eventTypes).toContain("MARK_SORTED");
    expect(eventTypes).toContain("COMPLETE");
  });

  it("records events with sequential sequence numbers", () => {
    const { trace } = runBubbleSort([5, 3, 8, 1], "bubble-sort-test-4");

    expect(trace.events.map((event) => event.sequence)).toEqual(
      trace.events.map((_, index) => index),
    );
  });
});
