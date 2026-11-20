import type { ExecutionContext } from "../../engine/execution/execution-context";
import type { SortingEvent } from "./sorting-event";

export function bubbleSort(
  input: readonly number[],
  context: ExecutionContext<number[], SortingEvent>,
): number[] {
  const values = [...input];

  const invocation = context.startInvocation("bubble-sort");

  for (let i = 0; i < values.length - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < values.length - 1 - i; j++) {
      context.recordEvent(invocation, {
        type: "COMPARE",
        indices: [j, j + 1],
        values: [values[j], values[j + 1]],
      });

      if (values[j] > values[j + 1]) {
        context.recordEvent(invocation, {
          type: "SWAP",
          indices: [j, j + 1],
          values: [values[j], values[j + 1]],
        });
        swapped = true;

        [values[j], values[j + 1]] = [values[j + 1], values[j]];
      }
    }

    context.recordEvent(invocation, {
      type: "MARK_SORTED",
      index: values.length - 1 - i,
      value: values[values.length - 1 - i],
    });

    if (!swapped) {
      break;
    }
  }

  if (values.length > 0) {
    context.recordEvent(invocation, {
      type: "MARK_SORTED",
      index: 0,
      value: values[0],
    });
  }

  context.completeInvocation(invocation.invocationId);

  return values;
}
