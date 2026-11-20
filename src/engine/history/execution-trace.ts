import type { BaseEvent } from "../events/base-event";

/**
 * Immutable record of one completed algorithm execution.
 */
export interface ExecutionTrace<TInput, TEvent extends BaseEvent> {
  readonly executionId: string;
  readonly algorithmId: string;
  readonly initialInput: TInput;
  readonly events: readonly TEvent[];
}
