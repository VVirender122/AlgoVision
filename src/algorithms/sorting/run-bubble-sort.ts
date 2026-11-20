import type { ExecutionEvent } from "../../engine/events/execution-event";
import { ExecutionContext } from "../../engine/execution/execution-context";
import type { ExecutionTrace } from "../../engine/history/execution-trace";
import { ExecutionTraceBuilder } from "../../engine/history/execution-trace-builder";
import { bubbleSort } from "./bubble-sort";
import type { SortingEvent } from "./sorting-event";

export function runBubbleSort(
  input: readonly number[],
  executionId: string,
): {
  result: number[];
  trace: ExecutionTrace<number[], ExecutionEvent<SortingEvent>>;
} {
  const initialInput = [...input];

  const traceBuilder = new ExecutionTraceBuilder<
    number[],
    ExecutionEvent<SortingEvent>
  >(executionId, "bubble-sort", initialInput);

  const context = new ExecutionContext<number[], SortingEvent>(
    executionId,
    traceBuilder,
  );

  const result = bubbleSort(initialInput, context);

  const trace = context.finish();

  return {
    result,
    trace,
  };
}
