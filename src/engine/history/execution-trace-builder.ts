import type { BaseEvent } from "../events/base-event";
import type { ExecutionTrace } from "./execution-trace";

/**
 * Collects execution events and produces a completed trace.
 */

export class ExecutionTraceBuilder<TInput, TEvent extends BaseEvent> {
  private readonly events: TEvent[] = [];

  private readonly executionId: string;
  private readonly algorithmId: string;
  private readonly initialInput: TInput;

  constructor(executionId: string, algorithmId: string, initialInput: TInput) {
    this.executionId = executionId;
    this.algorithmId = algorithmId;
    this.initialInput = initialInput;
  }

  addEvent(event: TEvent): void {
    this.events.push(event);
  }

  build(): ExecutionTrace<TInput, TEvent> {
    return {
      executionId: this.executionId,
      algorithmId: this.algorithmId,
      initialInput: this.initialInput,
      events: [...this.events],
    };
  }
}