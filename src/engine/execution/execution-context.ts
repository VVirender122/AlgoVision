import type { ExecutionTrace } from "../history/execution-trace";
import type { BaseEvent } from "../events/base-event";
import type { ExecutionEvent } from "../events/execution-event";
import type { ExecutionTraceBuilder } from "../history/execution-trace-builder";
import type { AlgorithmInvocation } from "./algorithm-invocation";

/**
 * Event data without metadata managed by the execution context.
 * Distributes over unions to preserve individual event shapes.
 */
type EventPayload<TEvent extends BaseEvent> = TEvent extends BaseEvent
  ? Omit<
      TEvent,
      "id" | "sequence" | "algorithmId" | "invocationId" | "parentInvocationId"
    >
  : never;

/**
 * Coordinates metadata and event recording for one execution.
 */
export class ExecutionContext<TInput, TAlgorithmEvent extends BaseEvent> {
  private eventSequence = 0;
  private eventIdCounter = 0;
  private invocationIdCounter = 0;

  private finished = false;

  private readonly invocations = new Map<string, AlgorithmInvocation>();

  private readonly executionId: string;

  private readonly traceBuilder: ExecutionTraceBuilder<
    TInput,
    ExecutionEvent<TAlgorithmEvent>
  >;

  constructor(
    executionId: string,
    traceBuilder: ExecutionTraceBuilder<
      TInput,
      ExecutionEvent<TAlgorithmEvent>
    >,
  ) {
    this.executionId = executionId;
    this.traceBuilder = traceBuilder;
  }

  startInvocation(
    algorithmId: string,
    parentInvocationId?: string,
  ): AlgorithmInvocation {
    this.ensureNotFinished();

    if (
      parentInvocationId !== undefined &&
      !this.invocations.has(parentInvocationId)
    ) {
      throw new Error(`Unknown parent invocation: ${parentInvocationId}`);
    }

    const invocation: AlgorithmInvocation = {
      invocationId: `invocation-${++this.invocationIdCounter}`,
      algorithmId,
      parentInvocationId,
    };

    this.invocations.set(invocation.invocationId, invocation);

    this.recordLifecycleEvent(invocation, "START");

    return invocation;
  }

  recordEvent(
    invocation: AlgorithmInvocation,
    payload: EventPayload<TAlgorithmEvent>,
  ): void {
    this.ensureNotFinished();

    const registeredInvocation = this.invocations.get(invocation.invocationId);

    if (registeredInvocation !== invocation) {
      throw new Error("Unknown or invalid algorithm invocation.");
    }

    const event = {
      ...payload,
      id: `${this.executionId}-event-${++this.eventIdCounter}`,
      sequence: this.eventSequence++,
      algorithmId: invocation.algorithmId,
      invocationId: invocation.invocationId,
      parentInvocationId: invocation.parentInvocationId,
    } as ExecutionEvent<TAlgorithmEvent>;

    this.traceBuilder.addEvent(event);
  }

  completeInvocation(invocationId: string): void {
    this.ensureNotFinished();

    const invocation = this.invocations.get(invocationId);

    if (!invocation) {
      throw new Error(`Unknown invocation: ${invocationId}`);
    }

    const hasActiveChildren = Array.from(this.invocations.values()).some(
      (activeInvocation) =>
        activeInvocation.parentInvocationId === invocationId,
    );

    if (hasActiveChildren) {
      throw new Error(
        `Cannot complete invocation ${invocationId} while child invocations are active.`,
      );
    }

    this.recordLifecycleEvent(invocation, "COMPLETE");

    this.invocations.delete(invocationId);
  }

  finish(): ExecutionTrace<TInput, ExecutionEvent<TAlgorithmEvent>> {
    this.ensureNotFinished();

    if (this.invocations.size > 0) {
      throw new Error(
        "Cannot finish execution while algorithm invocations are active.",
      );
    }

    this.finished = true;

    return this.traceBuilder.build();
  }

  private ensureNotFinished(): void {
    if (this.finished) {
      throw new Error("Execution has already been finalized.");
    }
  }

  private recordLifecycleEvent(
    invocation: AlgorithmInvocation,
    type: "START" | "COMPLETE",
  ): void {
    const event = {
      id: `${this.executionId}-event-${++this.eventIdCounter}`,
      sequence: this.eventSequence++,
      type,
      algorithmId: invocation.algorithmId,
      invocationId: invocation.invocationId,
      parentInvocationId: invocation.parentInvocationId,
    } as ExecutionEvent<TAlgorithmEvent>;

    this.traceBuilder.addEvent(event);
  }
}
