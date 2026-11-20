import type { BaseEvent } from "../../engine/events/base-event";

export type CompareEvent = BaseEvent & {
  readonly type: "COMPARE";
  readonly indices: readonly [number, number];
  readonly values: readonly [number, number];
};

export type SwapEvent = BaseEvent & {
  readonly type: "SWAP";
  readonly indices: readonly [number, number];
  readonly values: readonly [number, number];
};

export type MarkSortedEvent = BaseEvent & {
  readonly type: "MARK_SORTED";
  readonly index: number;
  readonly value: number;
};

export type SortingEvent =
  | CompareEvent
  | SwapEvent
  | MarkSortedEvent;