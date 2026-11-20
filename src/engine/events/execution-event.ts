import type { BaseEvent } from "./base-event";
import type { LifecycleEvent } from "./lifecycle-event";

export type ExecutionEvent<TAlgorithmEvent extends BaseEvent = never> = LifecycleEvent | TAlgorithmEvent;