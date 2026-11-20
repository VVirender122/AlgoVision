/**
 * Common metadata shared by every execution event.
 */
export interface BaseEvent {
  readonly id: string;
  readonly sequence: number;
  readonly type: string;

  readonly algorithmId: string;
  readonly invocationId: string;
  readonly parentInvocationId?: string;
}
